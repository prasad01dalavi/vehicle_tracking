# -*- coding: utf-8 -*-
# Core Django Imports
from __future__ import unicode_literals

# Third Party App Imports
from rest_framework.views import APIView
from rest_framework.response import Response

# My Imports
from .models import Vehicle, Driver, Assignment, Task, TaskAssignment, DeviceActivation
from devices.models import DeviceData
from reports.models import Trip, MonthlyVehicleTasks

from .serializers import VehicleSerializer, DriverSerializer, AssignmentSerializer, TaskSerializer
from .serializers import DeviceActivationSerializer, TaskAssignmentSerializer

import json                    # Used for getting the from serializer
import time                    # Using for building logic which will find free vehicles before or after tasks


# This api gives me all vehicles related data
class FleetStatus(APIView):                               # /dashboard/vehicle
    def get(self, request):                               # Gives all the Vehicle related Data
        registered_vehicles_info = DeviceActivation.objects.filter(
            active=1)               # all registered and active vehicles
        registered_vehicles = []

        for field in registered_vehicles_info:
            try:
                vehicle_make = field.vehicle.vehicle_make
                vehicle_type = field.vehicle.vehicle_type
                vehicle_tonnage = field.vehicle.vehicle_tonnage
            except:
                vehicle_make = 'N.A'
                vehicle_type = 'N.A'
                vehicle_tonnage = 'N.A'
            try:
                vehicle_availability_hr = field.vehicle.vehicle_available_time
                if vehicle_availability_hr == "":
                    vehicle_availability_hr = 'N.A'
            except:
                vehicle_availability_hr = '0'

            try:
                first_name = field.assignment.assign_driver.first_name
                last_name = field.assignment.assign_driver.last_name
            except:
                first_name = 'N.A'
                last_name = 'N.A'

            try:
                speed = DeviceData.objects.filter(
                    Device_ID=field.device_IMEI).latest('id').Speed_kmph
                if speed == '0':
                    status = '0'
                    vehicle_speed = '0'
                else:
                    status = '1'
                    vehicle_speed = speed
            except:
                status = '0'
                vehicle_speed = '0'

            try:
                longs = DeviceData.objects.filter(
                    Device_ID=field.device_IMEI).latest('id').Longitude
                lats = DeviceData.objects.filter(Device_ID=field.device_IMEI).latest('id').Latitude
            except:
                longs = 'N.A'
                lats = 'N.A'

            registered_vehicles.append({
                'vehicle_id': field.id,
                'vehicle': field.vehicle_registration_number,
                'device_imei': field.device_IMEI,
                'vehicle_make': vehicle_make,
                'vehicle_type': vehicle_type,
                'vehicle_tonnage': vehicle_tonnage,
                'first_name': first_name,
                'last_name': last_name,
                'status': status,
                'speed': vehicle_speed,
                'vehicle_available_time': vehicle_availability_hr,
                'longitude': longs[0:10],
                'latitude': lats[0:10]
            })
        my_response = {'fleet_status': registered_vehicles}
        print 'Fleet Details!'
        return Response(my_response)

    def post(self, request):        # Adds extra details to registered vehicle
        try:                        # try to edit existing data first
            qs = Vehicle.objects.get(
                select_registration_number=request.data['select_registration_number'])
            # Get the Posted data in Serializer object
            serializer = VehicleSerializer(qs, data=request.data)
            print 'Updating the change !'
        except:
            serializer = VehicleSerializer(data=request.data)        # Add new data
        if serializer.is_valid():
            serializer.save()                               # Save the Vehicle Registration Data (new/existing)
            success_response = {'flag': '1'}
            return Response(success_response)               # Give Success Response
        else:                                               # Posted Vehicle data was not in the valid form
            failure_response = {'flag': '0'}
            return Response(failure_response)               # Give Failure Response


# This api serves list of unregistered vehicles for adding its details(Registration of vehicles)
class RegisteredVehicle(APIView):                           # /dashboard/vehicleforregistration
    def get(self, request):                                 # Gives unassigned registered vehicles
        assigned_registration_numbers = []
        vehicle_data = Vehicle.objects.all()
        for field in vehicle_data:
            assigned_registration_numbers.append(field.select_registration_number_id)

        unassigned_registration_numbers_data = DeviceActivation.objects.filter(
            id__gte=1, active=1).exclude(id__in=assigned_registration_numbers)
        unassigned_registration_numbers = []
        for field in unassigned_registration_numbers_data:
            unassigned_registration_numbers.append({
                'id': field.id,
                'vehicle_registration_number': field.vehicle_registration_number
            })

        return Response(unassigned_registration_numbers)

    # No need of POST Method


# This api gives list of all available active driver details
class DriverRegister(APIView):                              # /dashboard/driver
    def get(self, request):
        # Gives all the Drivers related Data in driver object
        drivers = Driver.objects.filter(active=1)
        driver_info = []
        for field in drivers:
            try:
                assigned_vehicle = Assignment.objects.get(
                    assign_driver=field.id).select_vehicle.vehicle_registration_number
                vehicle_id = Assignment.objects.get(assign_driver=field.id).select_vehicle_id
            except:
                assigned_vehicle = 'N.A'
                vehicle_id = 0
            driver_info.append({
                'driver_id': field.id,
                'first_name': field.first_name,
                'last_name': field.last_name,
                'address': field.address,
                'phone_number': field.phone_number,
                'driver_card_id': field.driver_card_id,
                'assigned_vehicle': assigned_vehicle,
                'assigned_vehicle_id': vehicle_id,
                'active': field.active
            })
        return Response(driver_info)

    def post(self, request):
        try:
            print request.data
            # Update  existing driver details (Edit)
            qs = Driver.objects.get(id=request.data['driver_id'])
            serializer = DriverSerializer(qs, data=request.data)
        except:
            serializer = DriverSerializer(data=request.data)        # Add new Driver details
        if serializer.is_valid():                           # Check whether the data is in valid form or not
            serializer.save()                               # Save the Posted data in Database
            # Posted Driver data is successfully saved
            success_response = {'flag': '1'}
            return Response(success_response)               # Give Success Response (Not mandatory)
        else:
            # Posted Driver data was not in the valid form
            failure_response = {'flag': '0'}
            return Response(failure_response)


# This api gives list of drivers which are not assigned to any vehicle (I think it's not in use because in driver assignment frontend is listing all drivers)
class UnassignedDrivers(APIView):                    # /dashboard/unassigneddrivers
    def get(self, request):                          # Gives all unassigned drivers
        all_assigned_drivers = Assignment.objects.all()
        assigned_drivers = []  # Declaring an empty list
        for driver in all_assigned_drivers:
            assigned_drivers.append(driver.id)       # Making list of assigned drivers
        try:  # Try to find whether there are any unassigned drivers
            unassigned_drivers = Driver.objects.filter(id__gte=1).exclude(id__in=assigned_drivers)
            serializer = DriverSerializer(unassigned_drivers, many=True)
            if len(serializer.data) == 0:          # If there are no Unassigned Drivers available
                # Response saying that there are no more Drivers to assign
                driver_response = {'flag': 0}
                return Response(driver_response)
            # Unassigned(Free) Drivers that can be assigned to vehicle
            return Response(serializer.data)
        except:  # If Query of finding unassigned drivers gets failed due to unavailability of unassigned drivers
            driver_response = {'flag': 0}
            # Response saying that there are no more drivers available to assign
            return Response(driver_response)


# This api helps to assign driver to a selected vehicle
class AssignmentRegister(APIView):                 # /dashboard/assignment
    def get(self, request):
        assignment = Assignment.objects.all()      # Gives all the assignment details
        assignment_details = []
        for field in assignment:
            assignment_details.append({
                'driver_id': field.assign_driver_id,
                'select_vehicle': field.select_vehicle.id,
            })
        driver_data = {'assignment': assignment_details}
        return Response(driver_data)

    def post(self, request):                                     # Assigns driver to vehicle
        serializer = AssignmentSerializer(data=request.data)
        try:                                                     # Try to update the existing assignment
            assign = Assignment.objects.get(select_vehicle_id=request.data['select_vehicle'])
            assign.assign_driver_id = request.data['assign_driver']
            assign.save()
            return Response({'flag': '1'})
        except:
            # Unassign the existing assignment(make driver_id=0)
            if request.data['assign_driver'] == '0':
                return Response({'flag': 1})

            elif serializer.is_valid():                          # Check for the assignment data
                serializer.save()                                # Save the assignment if it is valid
                return Response({'flag': '1'})
            else:
                failure_response = {'flag': '0'}
                return Response(failure_response)

# This api gives me vehicle related all the data when i provide vehicle id


class GetVehicleRegister(APIView):                           # dashboard/getvehiclebyid
    # No need of GET Method

    def post(self, request):
        # Gives the vehicle (id) related all data
        vehicle_detail = {'is_vehicle': 1, 'is_driver': 1, 'is_task': 1}
        key = request.data['vehicle_id']      # Get the id of the vehicle
        registration_number_data = DeviceActivation.objects.select_related('vehicle', 'assignment',
                                                                           'taskassignment').get(pk=key)
        try:
            device_data = DeviceData.objects.filter(
                Device_ID=registration_number_data.device_IMEI).order_by('-id')[0]
            vehicle_detail['Longitude'] = device_data.Longitude
            vehicle_detail['Latitude'] = device_data.Latitude
        except:
            print 'Device Data Fetching Failed !'
            print 'It will not happen in practice! Do not worry!'
        try:
            vehicle_detail['vehicle_make'] = registration_number_data.vehicle.vehicle_make
        except:
            vehicle_detail['is_vehicle'] = 0

        try:
            vehicle_detail['first_name'] = registration_number_data.assignment.assign_driver.first_name
        except:
            vehicle_detail['is_driver'] = 0

        try:
            vehicle_detail['task_name'] = registration_number_data.taskassignment.select_task.task_name
        except:
            vehicle_detail['is_task'] = 0
        return Response(vehicle_detail)


# This api allows me to add/create new task
class TaskRegister(APIView):                           # dashboard/createtask
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()                          # Save the task details

            # Let's create Trip object, we need to update it later
            task_id = int(serializer.data['id'])
            status = '0'        # 0--> Not assigned, 1--> Asssigned, 2--> Running, 3--> Completed
            km_covered = '0'    # Task is just created so distance coverd will be 0 km and not started yet
            # Trip has not started so following parameters will be same as source
            current_location = serializer.data['source']
            remaining_time = serializer.data['estimated_time']
            estimated_reach_time = serializer.data['estimated_time']
            time_lag = '0'
            print 'Creating Trip Object...'
            trip = Trip(task_id=task_id, status=status, km_covered=km_covered, current_location=current_location, remaining_time=remaining_time,
                        estimated_reach_time=estimated_reach_time, time_lag=time_lag)
            trip.save()
            print 'Trip object has been created !'
            # Response saying that Task (as well as Trip) has been saved successfully.
            task_response = {'flag': 1}
            return Response(task_response)
        else:
            # Data has not been saved because it may not be a valid POST
            task_response = {'flag': 0}
            return Response(task_response)


# This api services information about created tasks e.g. its source, destination, time, status etc
class DisplayTask(APIView):                  # dashboard/displaytask
    def get(self, request):                  # Gives all task related data + assigned vehicle
        tasks = Task.objects.all()
        task_data = []
        for task in tasks:
            try:
                vehicle = TaskAssignment.objects.get(
                    select_task=task.id).assign_vehicle.vehicle_registration_number
                print vehicle, task.id
            except:
                vehicle = 'N.A'
            task_data.append({
                'id': task.id,
                'task_name': task.task_name,
                'source': task.source,
                'destination': task.destination,
                'planned_start_time': task.planned_start_time,
                'planned_end_time': task.planned_end_time,
                'customer_delivery_date_time': task.customer_delivery_date_time,
                'distance': task.distance,
                'estimated_time': task.estimated_time,
                'task_status': task.task_status,
                'action': task.action,
                'vehicle': vehicle
            })

        return Response(task_data)


# This api assigns vehicle to selected task
class TaskAssignmentRegister(APIView):      # /dashboard/assigntask
    # No need of GET Method

    def post(self, request):
        serializer = TaskAssignmentSerializer(data=request.data)
        print request.data
        if serializer.is_valid():
            serializer.save()               # Save the Assignment of Vehicles to Tasks in Database

            # Update the Task Status to Assigned
            task_data = Task.objects.get(id=request.data['select_task'])
            task_data.task_status = 1           # Task Status = 1 -> Assigned
            task_data.save()
            print 'Task Status has been updated to Assigned!'

            # Now updating the Trip Status to Assigned
            # get the trip data using task id
            trip = Trip.objects.get(task=int((serializer.data['select_task'])))
            trip.status = 1     # Trip Status = 1 --> Assigned
            trip.save
            task_response = {'flag': 1}     # Tell that the data has been saved successfully
            return Response(task_response)
        else:
            # Data has not been saved because it may not be a valid assignment
            task_response = {'flag': 0}
            return Response(task_response)


# This api services free vehicles for assigning to task
class VehicleForTaskAssignment(APIView):                       # /dashboard/vehiclefortaskassignment
    def post(self, request):
        vehicles = DeviceActivation.objects.all()
        available_vehicles = []     # for task assignment

        for veh in vehicles:
            try:
                assigned_vehicle = TaskAssignment.objects.get(assign_vehicle=veh.id)
                assigned_task = Task.objects.get(id=assigned_vehicle.select_task_id)
                vehicle_task_start = assigned_task.planned_start_time
                vehicle_task_end = assigned_task.planned_end_time
                # vehicle will be on task in between vehicle_task_start and vehicle_task_end

                selected_task = Task.objects.get(id=request.data['task_id'])
                selected_task_start = selected_task.planned_start_time  # can be after vehicle_task_end
                selected_task_end = selected_task.planned_end_time      # must be before vehicle_task_start

                # selected task wish the below time slot for the tasks
                task_start_time = time.strftime(selected_task_start)
                task_end_time = time.strftime(selected_task_end)

                # vehicle busy slots are as follows:
                vehicle_task_start_time = time.strftime(vehicle_task_start)
                vehicle_task_end_time = time.strftime(vehicle_task_end)

                # I can start the selected task after the vehicle_task_end_time or before the vehicle_task_start_time
                if (task_start_time > vehicle_task_end_time) or (task_end_time < vehicle_task_start_time):
                    available_vehicles.append({
                        'id': veh.id,
                        'vehicle_registration_number': veh.vehicle_registration_number
                    })
            except:   # error was occured due to the unavailability of vehicle in TaskAssignment means it is free to use
                print 'Vehicle is not assigned means it is available!!!!!'
                available_vehicles.append({
                    'id': veh.id,
                    'vehicle_registration_number': veh.vehicle_registration_number
                })
        return Response(available_vehicles)


# This api is used to delete the task and trip
class DeleteTask(APIView):                   # /dashboard/deletetask
    def post(self, request):
        task_id = request.data['task_id']
        try:  # Delete the task only if it is not started

            Task.objects.get(id=task_id).delete()
            TaskAssignment.objects.filter(select_task=task_id).delete()
            Trip.objects.filter(task=task_id).delete()
            MonthlyVehicleTasks.objects.filter(task=task_id).delete()
            return Response({'flag': 1})
        except:
            return Response({'flag': 0})


# This api is used during task assignment to show drivers on that vehicle
class TaskAssignmentDetail(APIView):                    # /dashbaord/taskassignmentdetail
    def get(self, request):                             # Gives all the information related to task assignment
        all_assigned_tasks = TaskAssignment.objects.all()
        assigned_tasks = []                     # Declaring an empty list
        for task in all_assigned_tasks:
            assigned_tasks.append(task.select_task_id)
        try:  # Try to find whether there are any unassigned tasks
            unassigned_tasks = Task.objects.filter(id__gte=1).exclude(id__in=assigned_tasks)
            serializer = TaskSerializer(unassigned_tasks, many=True)
            if len(serializer.data) == 0:  # If there are no Unassigned Tasks available
                assigned_task_details = {'unassigned_tasks': '0'}
            else:
                json_data = json.loads(json.dumps(serializer.data))
                assigned_task_details = {'unassigned_task': json_data}
        except:
            pass

        drivers = Driver.objects.all()  # Gives all the Drivers Data
        driver_info = []
        for driver in drivers:
            try:   # Trying to get vehicle-driver assignment details
                assigned_vehicle = Assignment.objects.get(
                    assign_driver=driver.id).select_vehicle.vehicle_registration_number
                vehicle_id = Assignment.objects.get(assign_driver=driver.id).select_vehicle_id
            except:
                assigned_vehicle = 'N.A'
                vehicle_id = 0
            driver_info.append({
                'driver_id': driver.id,
                'first_name': driver.first_name,
                'last_name': driver.last_name,
                'address': driver.address,
                'phone_number': driver.phone_number,
                'driver_card_id': driver.driver_card_id,
                'assigned_vehicle': assigned_vehicle,
                'assigned_vehicle_id': vehicle_id
            })
        assigned_task_details['driver'] = driver_info
        return Response(assigned_task_details)

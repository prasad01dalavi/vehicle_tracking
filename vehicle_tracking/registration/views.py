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

import json
import requests


class FleetStatus(APIView):                               # /dashboard/vehicle
    def get(self, request):                               # Gives all the Vehicle related Data
        registered_vehicles_info = DeviceActivation.objects.filter(
            active=1)  # all registered and active vehicles
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
        try:                        # try to edit existing data
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


class TaskRegister(APIView):                           # dashboard/createtask
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        print 'check:', request.data
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


class DisplayTask(APIView):                  # dashboard/displaytask
    def get(self, request):                  # Gives all task related data + assigned vehicle
        tasks = Task.objects.all()
        task_data = []
        for task in tasks:
            try:
                vehicle = TaskAssignment.objects.get(
                    select_task=task.id).assign_vehicle.vehicle_registration_number
            except:
                vehicle = 'N.A'
            task_data.append({
                'id': task.id,
                'task_name': task.task_name,
                'source': task.source,
                'destination': task.destination,
                'customer_delivery_date_time': task.customer_delivery_date_time,
                'distance': task.distance,
                'estimated_time': task.estimated_time,
                'task_status': task.task_status,
                'action': task.action,
                'vehicle': vehicle
            })

        return Response(task_data)


class TaskAssignmentRegister(APIView):      # /dashboard/assigntask
    # No need of GET Method

    def post(self, request):
        serializer = TaskAssignmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()               # Save the Assignment of Vehicles to Tasks in Database

            # Update the Task Status to Assigned
            task_data = Task.objects.get(id=request.data['select_task'])
            task_data.task_status = 1           # Task Status = 1 -> Assigned
            task_data.save()
            print 'Task Status has been updated to Assigned!'

            # Now updating the Trip Status to Assigned
            # Filter task in Trip by using task_id
            trip = Trip.objects.get(task=int((serializer.data['select_task'])))
            trip.status = 1     # Trip Status = 1 -> Assigned
            trip.save

            # Now assign the vehicle (and driver if it is not assigned already)
            if request.data['assign_driver'] == 0:      # Checking for driver assignment for task assigned vehicle
                pass        # No need of assigning driver during assignment of vehicle to task
            else:
                # Updating the driver-vehicle assignment (because there was no driver assigned to that vehicle)
                requests.post('http://127.0.0.1:8000/dashboard/assignment/',
                              json={'select_vehicle_id': request.data['assign_vehicle'],
                                    'assign_driver_id': request.data['assign_driver']})
            task_response = {'flag': 1}     # Tell that the data has been saved successfully
            return Response(task_response)
        else:
            # Data has not been saved because it may not be a valid assignment
            task_response = {'flag': 0}
            return Response(task_response)


class UnassignedTask(APIView):              # /dashboard/unassignedtask
    def get(self, request):                 # Give unassigned task (means no vehicle is assigned to the created task)
        all_assigned_tasks = TaskAssignment.objects.all()
        assigned_tasks = []
        for task in all_assigned_tasks:
            # Making list of assigned task (so that we can filter them)
            assigned_tasks.append(task.id)
        try:                                      # Try to find whether there are any unassigned tasks
            unassigned_tasks = Task.objects.filter(id__gte=1).exclude(id__in=assigned_tasks)
            serializer = TaskSerializer(unassigned_tasks, many=True)
            if len(serializer.data) == 0:         # If there are no Unassigned Tasks available
                # Response saying that there are no more Tasks for tasks assignment
                task_response = {'flag': 0}
                return Response(task_response)
            return Response(serializer.data)
        except:         # If Query of finding unassigned tasks gets failed due to unavailability of unassigned tasks
            vehicle_response = {'flag': 0}
            return Response(vehicle_response)

    # No need of POST Method


class UnassignedVehicle(APIView):                       # /dashboard/unassignedvehicle
    def get(self, request):
        assigned_tasks = TaskAssignment.objects.all()
        assigned_vehicle = []
        for task in assigned_tasks:
            # List of assigned vehicles to the task
            assigned_vehicle.append(task.assign_vehicle_id)
        try:                                                        # To find whether there are any unassigned tasks
            unassigned_vehicles = DeviceActivation.objects.filter(
                id__gte=1).exclude(id__in=assigned_vehicle)
            serializer = DeviceActivationSerializer(unassigned_vehicles, many=True)
            if len(serializer.data) == 0:         # If there are no Unassigned Vehicles available
                # Response saying that there are no more vehicles for tasks assignment
                vehicle_response = {'flag': 0}
                return Response(vehicle_response)
            return Response(serializer.data)
        except:
            vehicle_response = {'flag': 0}
            return Response(vehicle_response)


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


class TaskAssignmentDetail(APIView):                    # /dashbaord/taskassignmentdetail
    def get(self, request):                             # Gives all the information related to task assignment
        all_assigned_tasks = TaskAssignment.objects.all()
        assigned_tasks = []                     # Declaring an empty list
        for task in all_assigned_tasks:
            assigned_tasks.append(task.id)
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
        # ---------------------------------------------------------------
        vehicle_assignment = TaskAssignment.objects.all()
        assigned_vehicles = []
        for vehicle in vehicle_assignment:
            assigned_vehicles.append(vehicle.assign_vehicle_id)
        try:  # To find whether there are any unassigned vehicles
            unassigned_vehicles = DeviceActivation.objects.filter(
                id__gte=1).exclude(id__in=assigned_vehicles)
            serializer = DeviceActivationSerializer(unassigned_vehicles, many=True)
            if len(serializer.data) == 0:  # If there are no Unassigned Vehicles available
                assigned_task_details['unassigned_vehicle'] = '0'
            else:
                json_data = json.loads(json.dumps(serializer.data))
                assigned_task_details['unassigned_vehicle'] = json_data
        except:
            pass
        # ---------------------------------------------------------------
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

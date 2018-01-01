# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Third Party App Imports
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Trip, MonthlyVehicleTasks
from devices.models import DeviceData
from registration.models import Task, TaskAssignment, Vehicle, Assignment, DeviceActivation
from .models import Trip

from .serializers import TripSerializer

import json
from dateutil import parser
import datetime
import time
import urllib2      # This import is for distance_covered etc. calculation in Realtime Report


# This api gives real time report of all vehicles
class RealTimeReport(APIView):                  # dashboard/realtimereport
    value = 0       # This variable will be used to store remaining_time value returned by google api

    # This function will be called to get distance_covered, remaining_time and current_location
    def update_trip(self, vehicle_id, vehicle_number):
        try:    # Try to check whether that vehicle_id is assigned to any task
            task_assignment = TaskAssignment.objects.get(assign_vehicle=vehicle_id)
            if task_assignment.select_task.task_status == '2':  # Check for running task for that particular vehicle_id
                imei = DeviceActivation.objects.get(
                    vehicle_registration_number=vehicle_number).device_IMEI
                latitude = DeviceData.objects.filter(Device_ID=imei).order_by(
                    '-id')[0].Latitude  # Get the lateset latitude
                longitude = DeviceData.objects.filter(Device_ID=imei).order_by(
                    '-id')[0].Longitude  # Get the latest Longitude
                source_lat_long = task_assignment.select_task.source_lat_long
                current_lat_long = latitude + ',' + longitude
                destination_lat_long = task_assignment.select_task.destination_lat_long
                # Distance and Time Calculation using Google Api for the respective Trip
                distance_time_url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + \
                    source_lat_long + '&destinations=' + current_lat_long + '&key=AIzaSyBA82OpQywT7YA4_iRTOaCWDnHBUZJCEfk'

                distance_time_data = urllib2.urlopen(distance_time_url).read()
                distance = json.loads(distance_time_data)[
                    'rows'][0]['elements'][0]['distance']['text']
                print 'Distance Covered:', distance

                distance_time_url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + \
                    current_lat_long + '&destinations=' + destination_lat_long + \
                    '&key=AIzaSyBA82OpQywT7YA4_iRTOaCWDnHBUZJCEfk'
                distance_time_data = urllib2.urlopen(distance_time_url).read()
                duration = json.loads(distance_time_data)[
                    'rows'][0]['elements'][0]['duration']['text']

                self.value = json.loads(distance_time_data)[
                    'rows'][0]['elements'][0]['duration']['value']   # This value is required for frontend who calculates the estimated reach time

                location_url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + current_lat_long + '&sensor=true'
                location_data = urllib2.urlopen(location_url).read()
                current_location = json.loads(location_data)['results'][0]['formatted_address']
                print 'Current Location:', current_location

                # Lets update the trip with latest parameters
                trip_update = Trip.objects.get(task=task_assignment.select_task_id)
                trip_update.km_covered = distance
                trip_update.current_location = current_location
                trip_update.remaining_time = duration
                trip_update.save()  # estimated_reach_time and time lag is calculated by frontend
                print 'Trip updated!'
            else:       # Vehicle is not running on any Task
                self.value = 0      # Making value = 0 for estimated_reach_time calculation
        except:
            print 'Vehicle is not assigned for any Task'

    def get(self, request):
        vehicles = DeviceActivation.objects.all()
        realtime_report = []
        for vehicle in vehicles:
            try:
                vehicle_make = vehicle.vehicle.vehicle_make
            except:
                vehicle_make = 'N.A'

            try:
                driver = vehicle.assignment.assign_driver.first_name
            except:
                driver = 'N.A'

            # call update_trip method to calculate distance_covered, remaining_time and current_location and update trip with these fields
            self.update_trip(vehicle.id, vehicle.vehicle_registration_number)

            try:
                task_name = vehicle.taskassignment.select_task.task_name
                source = vehicle.taskassignment.select_task.source
                destination = vehicle.taskassignment.select_task.destination
                planned_end_time = vehicle.taskassignment.select_task.planned_end_time
                distance = vehicle.taskassignment.select_task.distance
                actual_start_time = vehicle.taskassignment.select_task.actual_start_time
                km_covered = Trip.objects.get(
                    task_id=vehicle.taskassignment.select_task_id).km_covered
                current_location = Trip.objects.get(
                    task_id=vehicle.taskassignment.select_task_id).current_location
                remaining_time = Trip.objects.get(
                    task_id=vehicle.taskassignment.select_task_id).remaining_time
                estimated_reach_time = Trip.objects.get(task_id=vehicle.
                                                        taskassignment.select_task_id).estimated_reach_time
                # don't have this data, frontend is calculating estimated_reach_time and time_lag
                time_lag = Trip.objects.get(task_id=vehicle.taskassignment.select_task_id).time_lag

            except:
                task_name = 'N.A'
                source = 'N.A'
                destination = 'N.A'
                distance = 'N.A'
                planned_end_time = ''
                actual_start_time = ''
                km_covered = 'N.A'
                current_location = 'N.A'
                remaining_time = ''
                estimated_reach_time = 'N.A'  # not required but just passing it if frontend is using it
                time_lag = 'N.A'  # not required but just passing it if frontend is using it

            try:
                speed = DeviceData.objects.filter(
                    Device_ID=vehicle.device_IMEI).latest('id').Speed_kmph
                if speed == '0':
                    status = '0'
                else:
                    status = '1'
            except:
                pass

            realtime_report.append({
                'vehicle_number': vehicle.vehicle_registration_number,
                'model': vehicle_make,
                'driver': driver,
                'task_name': task_name,
                'from': source,
                'to': destination,
                'planned_end_time': planned_end_time,
                'distance': distance,
                'start_time': actual_start_time,
                'running_status': status,
                'distance_covered': km_covered,
                'current_location': current_location,
                'remaining_time': remaining_time,
                'estimated_reach_time': estimated_reach_time,
                'estimated_reach_value': self.value,    # this is required for frontend to calculated estimated reach time
                'time_lag': time_lag
            })
        return Response(realtime_report)


class TripStatusUpdate(APIView):                             # /dashboard/updatetripstatus
    def get(self, request):
        trip_data = Trip.objects.all()
        serializer = TripSerializer(trip_data, many=True)
        return Response(serializer.data)

    def post(self, request):
        try:
            task_id = request.data['task_id']
            trip_data = Trip.objects.get(task_id=task_id)
            trip_data.status = request.data['action']           # Update the Trip Status
            trip_data.save()

            task_data = Task.objects.get(pk=task_id)
            task_data.action = request.data['action']

            if request.data['action'] == '0':
                task_data.task_status = '1'                 # Task status -> Assigned
                task_data.action = request.data['action']   # Action -> -- select action --
                task_data.save()
                print 'Task status has been reverted back to Assigned!'

            if request.data['action'] == '2':
                task_data.action = request.data['action']  # Action -> start
                task_data.task_status = '2'   # Task status -> Running
                # Vehicle has been started, Lets update the actual start time in Task
                ts = time.time()
                start_date_time = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
                task_data.actual_start_time = start_date_time
                task_data.save()
                print 'Task Status has been updated to Running(Started)!'

            # Lets update Monthly vehicle task report if the task has been completed!
            if request.data['action'] == '3':
                task_data = Task.objects.get(pk=task_id)
                task_data.task_status = request.data['action']      # Update Task Status to complete
                ts = time.time()
                end_date_time = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
                task_data.actual_end_time = end_date_time       # Updating the actual end time of task
                task_data.save()
                print 'Task Status updated to complete'

                # Time taken hr calculation:
                start_time = parser.parse(task_data.actual_start_time)
                end_time = parser.parse(task_data.actual_end_time)
                try:
                    time_difference_sec = (end_time - start_time).total_seconds()
                    time_difference_hr = time_difference_sec / 3600
                    # Actual time taken to complete the task
                    actual_time = str(time_difference_hr)[:4]
                except:
                    actual_time = '0'
                print 'Difference between start time and end time:', actual_time

                vehicle_id = TaskAssignment.objects.get(select_task_id=task_id).assign_vehicle_id
                try:
                    driver_id = Assignment.objects.get(
                        select_vehicle_id=vehicle_id).assign_driver_id
                except:
                    # vehicle may not have driver information so default taking 1 (BUG)
                    driver_id = 1
                start_date = Task.objects.get(id=task_id).actual_start_time
                source = Task.objects.get(id=task_id).source
                destination = Task.objects.get(id=task_id).destination
                estimated_travel_time = Task.objects.get(id=task_id).estimated_reaching_hr

                ideal_time = float(estimated_travel_time[0:5])
                actual_time = float(actual_time)
                delay = actual_time - ideal_time
                km_run = Task.objects.get(id=task_id).distance
                vehicle_task = MonthlyVehicleTasks(task_id=task_id, vehicle_id=vehicle_id, driver_id=driver_id,
                                                   start_date=start_date, source=source, destination=destination,
                                                   estimated_travel_time=str(ideal_time),
                                                   actual_time_taken=str(actual_time), delay=delay, km_run=km_run)
                vehicle_task.save(force_insert=True)
                print 'Monthly Task has been updated !'
            return Response({'flag': 1})
        except:
            return Response({'flag': 0})


class GetTripRegister(APIView):                 # dashboard/gettripbytaskid/

    def post(self, request):
        task_id = request.data['task_id']

        # First updating the trip details so that frontend can calculate current location and distance travelled
        device_id = TaskAssignment.objects.get(pk=task_id).assign_vehicle.device_IMEI
        longitude = DeviceData.objects.filter(Device_ID=device_id).order_by('-id')[0].Longitude
        latitude = DeviceData.objects.filter(Device_ID=device_id).order_by('-id')[0].Latitude
        trip = Trip.objects.get(pk=1)
        current_lat_long = str(latitude) + ',' + str(longitude)
        trip.current_lat_long = current_lat_long
        print 'Trip Current Latitude, Longitude has been updated !'
        trip.save()

        # Obtaining updated trip data for real time report
        trip_data = Trip.objects.get(task_id=task_id)
        serializer1 = TripSerializer(trip_data)
        # Converting ordered dict into the json format
        json_data = json.loads(json.dumps(serializer1.data))
        my_response = {'Trip': json_data}

        try:
            reg_number = TaskAssignment.objects.get(
                pk=task_id).assign_vehicle.vehicle_registration_number
            vehicle_related_data = {'vehicle_number': reg_number}
            device_activation_id = TaskAssignment.objects.get(pk=task_id).assign_vehicle.id
            vehicle_model = Vehicle.objects.get(
                select_registration_number=device_activation_id).vehicle_make
            vehicle_related_data['vehicle_model'] = vehicle_model
            driver = Assignment.objects.get(
                select_vehicle_id=device_activation_id).assign_driver.first_name
            vehicle_related_data['Driver'] = driver
            my_response['vehicle'] = vehicle_related_data
        except:
            my_response = {'flag': 0}

        return Response(my_response)


class VehicleTaskReport(APIView):                               # /dashboard/vehicletaskreport
    def post(self, request):
        vehicle_tasks_info = MonthlyVehicleTasks.objects.filter(
            vehicle_id=request.data['vehicle_id'])
        if len(vehicle_tasks_info) == 0:        # No vehicle has completed any task
            return Response({'flag': 0})

        vehicle_tasks = []
        total_tasks_of_vehicle = 0      # Intializing some default values
        on_time_tasks = 0
        before_time_tasks = 0
        delayed_tasks = 0
        delay_hrs = 0

        for field in vehicle_tasks_info:
            try:
                model = Vehicle.objects.get(
                    select_registration_number_id=field.vehicle).vehicle_make
            except:
                model = 'N.A'
            total_tasks_of_vehicle += 1
            if field.delay < 1:
                before_time_tasks += 1
            elif field.delay == 0:
                on_time_tasks += 1
            else:
                delayed_tasks += 1
                delay_hrs += field.delay
            vehicle_tasks.append({
                'vehicle_number': field.vehicle.vehicle_registration_number,
                'model': model,
                'driver': field.driver.first_name,
                'start_date_time': field.task.actual_start_time,
                'task_name': field.task.task_name,
                'source': field.task.source,
                'destination': field.task.destination,
                'estimated_travel_time': field.estimated_travel_time,
                'actual_time_taken': field.actual_time_taken,
                'delay': str(field.delay)[0:5],     # Rounding off delay digits for nice display
                'km_run': field.km_run
            })
        vehicle_task_report = {'vehicle_task': vehicle_tasks}       # All Available task of vehicle

        # Let's give summery of the vehicle tasks
        try:
            vehicle_available_time = Vehicle.objects.get(id=2).vehicle_available_time
            efficiency = {'vehicle_available_time': vehicle_available_time}
            vehicle_run_hr = 0      # This will hold the total time vehicle travelled in all the tasks
            vehicle_tasks = MonthlyVehicleTasks.objects.filter(vehicle_id=2)
            for field in vehicle_tasks:
                vehicle_run_hr = vehicle_run_hr + float(field.actual_time_taken)

            efficiency['vehicle_run_time'] = vehicle_run_hr
            vehicle_hour_efficiency = (float(vehicle_run_hr) / float(vehicle_available_time)) * 100
            efficiency['efficiency_percentage'] = vehicle_hour_efficiency
            vehicle_task_report['vehicle_efficiency'] = efficiency
        except:
            efficiency['vehicle_run_time'] = 'N.A'
            efficiency['efficiency_percentage'] = 'N.A'
            vehicle_task_report['vehicle_efficiency'] = 'N.A'

        # Let's do task delay analysis
        delay_percentage = delayed_tasks / total_tasks_of_vehicle * 100
        vehicle_delay_analysis = {'total_tasks': total_tasks_of_vehicle, 'on_time': on_time_tasks,
                                  'before_time': before_time_tasks, 'delayed': delayed_tasks,
                                  'delay_hrs': delay_hrs, 'delayed_task_percentage': delay_percentage}
        vehicle_task_report['vehicle_task_time_analysis'] = vehicle_delay_analysis
        return Response(vehicle_task_report)


class VehicleUtilization(APIView):                       # /dashboard/vehicleutilization

    def get(self, request):
        fleet = DeviceActivation.objects.all()
        vehicle_utilization = []
        print 'Vehicle Utilization Report!'
        for field in fleet:
            try:
                model = field.vehicle.vehicle_make
            except:
                model = 'N.A'
            try:                                # Try if that vehicle has performed any task o.w. all fields will be 0
                total_tasks_of_vehicle = 0
                before_time_tasks = 0
                on_time_tasks = 0
                delayed_tasks = 0
                delay_hrs = 0
                distance = 0
                vehicle_run_hr = 0
                vehicle_tasks = MonthlyVehicleTasks.objects.filter(vehicle_id=field.id)

                for veh in vehicle_tasks:
                    total_tasks_of_vehicle += 1
                    if veh.delay < 1:
                        before_time_tasks += 1
                    elif veh.delay == 0:
                        on_time_tasks += 1
                    else:
                        delayed_tasks += 1
                        delay_hrs += veh.delay

                    vehicle_run_hr = vehicle_run_hr + float(veh.actual_time_taken)
                    # get int value of distance by removing 'km' and add
                    distance += int(veh.km_run.strip('km'))
                try:
                    vehicle_available_time = field.vehicle.vehicle_available_time
                    vehicle_hour_efficiency = (float(vehicle_run_hr) /
                                               float(vehicle_available_time)) * 100
                except:
                    vehicle_hour_efficiency = 'N.A'
                delay_percentage = delayed_tasks / total_tasks_of_vehicle * 100
                task_count = vehicle_tasks.count()   # total task completed by that vehicle

            except:
                task_count = 0
                distance = 0
                on_time_tasks = 'N.A'
                delayed_tasks = 'N.A'
                delay_percentage = 'N.A'
                distance = 'N.A'

            vehicle_utilization.append({
                'vehicle_number': field.vehicle_registration_number,
                'model': model,
                'total_tasks': task_count,
                'on_time': on_time_tasks,
                'before_time': before_time_tasks,
                'delayed': delayed_tasks,
                'delayed_hrs': delay_hrs,
                'delayed_task_percentage': delay_percentage,
                'km_run': distance,
                'vehicle_hr_efficiency': str(vehicle_hour_efficiency)[:5]
            })
        return Response(vehicle_utilization)

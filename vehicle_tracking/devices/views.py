# -*- coding: utf-8 -*-
# Core Django Imports
from __future__ import unicode_literals

# Third Party App Imports
from rest_framework.views import APIView
from rest_framework.response import Response

# My Imports
from .models import DeviceData
from .serializers import DeviceDataSerializer


class DeviceDataRegister(APIView):
    # No need of GET Method. Latest data of a particular device will be responded.

    def post(self, request):
        device_id = request.data['device_id']
        print 'Device Data request!'
        try:  # Try to get latest record of the respective device_id (Device IMEI)
            device_data = DeviceData.objects.filter(Device_ID=device_id).order_by('-id')[0]
            serializer = DeviceDataSerializer(device_data)
            return Response(serializer.data)
        except:
            # If I do not find any data. 'No data found!' message will be displayed.
            return Response({'flag': 0})


class HistoryRegister(APIView):
    # No need of GET Method. History will be responded by Start and End

    def post(self, request):
        print 'Got the history request!'
        device_id = request.data['device_id']  # Get the device_id
        start = request.data['start']          # Get the Start Date Time
        end = request.data['end']              # Get the End Date Time

        try:  # Try to find closest record key for start date-time
            closest_greater_qs = DeviceData.objects.filter(created_at__gt=start,
                                                           Device_ID=device_id).order_by('created_at')
            start_record_key = closest_greater_qs[0].id
        except:
            pass

        try:  # Try to find closest record key for end date-time
            closest_less_qs = DeviceData.objects.filter(created_at__lt=end,
                                                        Device_ID=device_id).order_by('-created_at')
            end_record_key = closest_less_qs[0].id
        except:
            pass

        try:
            print 'Start Record Key:', start_record_key
            print 'End Record Key:', end_record_key
            test_object = DeviceData.objects.filter(id__gte=start_record_key, id__lte=end_record_key,
                                                    Device_ID=device_id)
            print 'Got the data!'
            serializer = DeviceDataSerializer(test_object, many=True)
            return Response(serializer.data)
        except:
            history = {'flag': '0'}
        return Response(history)

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class DeviceData(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    # IMEI Number of a device
    Device_ID = models.CharField(max_length=20, null=True)
    DeviceTimeStamp = models.CharField(max_length=35, null=True)
    Longitude = models.CharField(max_length=20, null=True)
    Latitude = models.CharField(max_length=20, null=True)
    Altitude = models.CharField(max_length=10, null=True)
    Angle = models.CharField(max_length=5, null=True)
    Satellite = models.CharField(max_length=5, null=True)
    Speed_kmph = models.CharField(max_length=5, null=True)
    HDOP = models.CharField(max_length=5, null=True)
    Ignition = models.CharField(max_length=5, null=True)
    Country_Code_Geonames = models.CharField(max_length=5, null=True)
    Virtual_GPS_Odometer = models.CharField(max_length=15, null=True)

    def __str__(self):
        return self.Device_ID     # Show the device data in admin panel with device id

    class Meta:
        verbose_name_plural = "Device Data"

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from registration.models import Task


class Trip(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    # Holds all the information about task
    task = models.ForeignKey(Task, null=True)
    # 0 -> Stopped, 1 -> Running, 2 -> Idle
    status = models.CharField(max_length=5, null=True)
    # backend should calculate these parameters !!!!!!!
    km_covered = models.CharField(max_length=100, null=True)
    current_location = models.CharField(max_length=255, null=True)
    remaining_time = models.CharField(max_length=100, null=True)
    estimated_reach_time = models.CharField(max_length=100, null=True)   # not in use
    time_lag = models.CharField(max_length=100, null=True)               # not is use

    def __str__(self):
        return str(self.task)


class MonthlyVehicleTasks(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    task = models.ForeignKey('registration.Task')
    vehicle = models.ForeignKey('registration.DeviceActivation')
    driver = models.ForeignKey('registration.Driver')
    start_date = models.CharField(max_length=100, null=True)   # start date of completed task
    # Source of the Vehicle completed task
    source = models.CharField(max_length=255, null=True)
    destination = models.CharField(max_length=255, null=True)  # Destination of the completed task
    # expected time to reach destination for that task(id)
    estimated_travel_time = models.CharField(max_length=50, null=True)
    # actual time taken by the vehicle to reach destination for that task(id)
    actual_time_taken = models.CharField(max_length=50, null=True)
    # delay = estimated_travel_time - actual_time_taken (for that task)
    delay = models.FloatField(null=True)
    # Distance between the source and destination
    km_run = models.CharField(max_length=10, null=True)

    def __str__(self):
        return str(self.vehicle)

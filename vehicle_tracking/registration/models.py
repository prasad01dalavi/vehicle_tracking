# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# My models (Tables in my Database)


class Vehicle(models.Model):  # This table contains extra information about a registered vehicle
    # Auto updated when data is inserted
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    # Auto updated when data is altered
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    # registration number will be selected from Device Activation Table
    select_registration_number = models.OneToOneField("DeviceActivation", null=True)
    # Holds the value of Vehicle Make (Brand) e.g. TATA
    vehicle_make = models.CharField(max_length=20, null=True)
    # Type of Vehicle e.g. Platform, Tralor etc.
    vehicle_type = models.CharField(max_length=20, null=True)
    # Value of the weight that vehicle can contain in tons
    vehicle_tonnage = models.CharField(max_length=5, null=True)
    vehicle_available_time = models.CharField(max_length=50, blank=True)

    def __str__(self):
        # It appears in Admin Panel (represents a particular record in a Table)
        return self.vehicle_make

    class Meta:
        verbose_name_plural = "Vehicles"    # Model name correction because it appears in Admin Panel like Vehicless


class Driver(models.Model):  # This Table contains driver related information
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    first_name = models.CharField(max_length=10, null=True)
    last_name = models.CharField(max_length=10, null=True)
    address = models.CharField(max_length=100, null=True)
    phone_number = models.CharField(max_length=10, null=True)
    driver_card_id = models.CharField(max_length=12, null=True)
    active = models.CharField(max_length=1, default=1)

    def __str__(self):
        return self.first_name


class Assignment(models.Model):  # This table contains registered vehicle(in admin) and driver relationship
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    select_vehicle = models.OneToOneField("DeviceActivation", null=True)
    assign_driver = models.OneToOneField("Driver", null=True)

    def __str__(self):
        return str(self.select_vehicle)


class Task(models.Model):  # This table contains task related details
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    task_name = models.CharField(max_length=20, null=True)
    source = models.CharField(max_length=255, null=True)
    destination = models.CharField(max_length=255, null=True)
    customer_delivery_date_time = models.CharField(
        max_length=30, null=True)    # Most IMP Factor in Tasks
    # Calculated using customer_delivery_date_time
    critical_start_time = models.CharField(max_length=30, null=True)
    # must be <= critical_start_time (1 Hr before)
    planned_start_time = models.CharField(max_length=30, null=True)
    # Expected to be < customer_delivery_date_time
    planned_end_time = models.CharField(max_length=30, null=True)
    # Calculated using source and destination on Google Map
    distance = models.CharField(max_length=15, null=True)
    estimated_time = models.CharField(max_length=30, null=True)  # Can be in Day, Hour and Minute
    priority = models.CharField(max_length=5, null=True)         # 0 -> Low, 1 -> Medium, 2 -> High
    # 0 -> off, 2 -> start(Running), 3 -> completed
    action = models.CharField(max_length=5, null=True)
    # when the task is started by pressing start button that will be actual start time
    actual_start_time = models.CharField(max_length=30, null=True, blank=True)
    actual_end_time = models.CharField(max_length=30, null=True, blank=True)
    # Used for Calculating distance covered in RT Report
    source_lat_long = models.CharField(max_length=100, null=True)
    # Used for remaining time calculation
    destination_lat_long = models.CharField(max_length=100, null=True)
    estimated_reaching_hr = models.CharField(
        max_length=255, null=True)  # Used for delay calculation
    # task_status = 0 -> Unassigned, 1 -> Assigned, 2 -> Running, 3 -> Complete
    task_status = models.CharField(max_length=10, default='0')

    def __str__(self):
        return self.task_name


class TaskAssignment(models.Model):  # This table contains assigned vehicle to the task
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    select_task = models.ForeignKey("Task", null=True)
    # We can assign any registered vehicle in DeviceActivation Table which is free for that time slot of task
    assign_vehicle = models.ForeignKey("DeviceActivation", null=True)

    def __str__(self):
        return str(self.select_task)


class CustomerRegistration(models.Model):  # This table contains Customer details
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255, null=True)
    phone_number = models.CharField(max_length=10, null=True)
    company = models.CharField(max_length=255)
    fleet_size = models.CharField(max_length=5, null=True)
    # username and password will be used by customer to see the fleet they own
    username = models.CharField(max_length=10, null=True)
    password = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.first_name


class DeviceActivation(models.Model):  # This table contains customer, device and vehicle linking(activation)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    select_customer = models.ForeignKey("CustomerRegistration", null=True)
    # Ruptela Device IMEI length = 14
    device_IMEI = models.CharField(max_length=20)
    vehicle_registration_number = models.CharField(max_length=15)
    active = models.CharField(max_length=1, default=1)

    def __str__(self):
        return self.vehicle_registration_number

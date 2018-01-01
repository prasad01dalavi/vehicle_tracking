# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from django.contrib.admin.models import LogEntry    # This is for removing recent activities

from models import Vehicle, Driver, Assignment, Task, TaskAssignment, CustomerRegistration, DeviceActivation

# LogEntry.objects.all().delete()     # This will clear the recent activities in admin


class CustomerRegistrationAdmin(admin.ModelAdmin):
    # define which columns should be displayed
    list_display = ('first_name', 'last_name', 'address',
                    'phone_number', 'fleet_size', 'username', 'password')
    # add filtering by phone_number
    list_filter = ('phone_number',)
    # add search field
    search_fields = ['first_name', 'last_name']


# Assigns Device to a customer and bind it to vehicle registration number
class DeviceActivationAdmin(admin.ModelAdmin):
    # define which columns should be displayed
    list_display = ('select_customer', 'device_IMEI', 'vehicle_registration_number')
    # add filtering by select_customer
    list_filter = ('select_customer',)
    # search for device information by IMEI or vehicle registration number
    search_fields = ['device_IMEI', 'vehicle_registration_number']


class DriverAdmin(admin.ModelAdmin):
    # define which columns should be displayed
    list_display = ('first_name', 'last_name', 'phone_number', 'address')
    # search for driver information with phone number
    search_fields = ['phone_number']


class AssignmentAdmin(admin.ModelAdmin):
    # define which columns should be displayed
    list_display = ('select_vehicle', 'assign_driver')
    # search for vehicle-driver assignment
    search_fields = ['select_vehicle', 'assign_driver']


admin.site.register(Vehicle)
admin.site.register(Task)
admin.site.register(TaskAssignment)
admin.site.register(CustomerRegistration, CustomerRegistrationAdmin)
admin.site.register(DeviceActivation, DeviceActivationAdmin)
admin.site.register(Driver, DriverAdmin)
admin.site.register(Assignment, AssignmentAdmin)

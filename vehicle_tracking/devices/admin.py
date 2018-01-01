# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from models import DeviceData

# Registering my models in django admin
admin.site.register(DeviceData)

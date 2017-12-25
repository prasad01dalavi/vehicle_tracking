"""vehicle_tracking URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

# Core Django Import
from django.conf.urls import url, include
from django.contrib import admin
admin.site.site_header = 'Living Mind Technologies'
admin.site.index_title = 'EyeWay Tracking Solutions...'
admin.site.site_title = 'Administration'

# Third Party App Imports
from rest_framework.urlpatterns import format_suffix_patterns   # This is used for using urls as api

# My Imports
from front_end.AppLanding import AppLanding  # This is for starting Angular 2 template files

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', AppLanding.as_view(), name="Angular_2"),    # Loads angular 2 template
    # Go to registration app urls.py for remaining part of url
    url(r'^dashboard/', include('registration.urls')),
    # Go to devices app urls.py for remaining part of url
    url(r'^dashboard/', include('devices.urls')),
    # Go to reports app urls.py for remaining part of url
    url(r'^dashboard/', include('reports.urls')),
]

urlpatterns = format_suffix_patterns(urlpatterns)

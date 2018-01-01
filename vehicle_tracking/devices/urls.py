from django.conf.urls import url

from . import views

urlpatterns = [
    # Views a POST request which responds with latest device data of requested device id
    url(r'^gps/$', views.DeviceDataRegister.as_view()),
    # POST request with device_id, start and end datetime
    url(r'^gethistory/$', views.HistoryRegister.as_view()),
]

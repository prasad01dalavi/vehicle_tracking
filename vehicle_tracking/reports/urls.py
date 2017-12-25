from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^realtimereport/$', views.RealTimeReport.as_view()),
    url(r'^gettripbytaskid/$', views.GetTripRegister.as_view()),
    url(r'^updatetripstatus/$', views.TripStatusUpdate.as_view()),
    url(r'^vehicletaskreport/$', views.VehicleTaskReport.as_view()),
    url(r'^vehicleutilization/$', views.VehicleUtilization.as_view()),
]

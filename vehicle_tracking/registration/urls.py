from django.conf.urls import url

from . import views

urlpatterns = [
    # list of all registered vehicle with detail
    url(r'^vehicle/$', views.FleetStatus.as_view()),
    # get unassigned registered vehicles
    url(r'^vehicleforregistration/$', views.RegisteredVehicle.as_view()),
    url(r'^driver/$', views.DriverRegister.as_view()),                 # list of all drivers
    url(r'^unassigneddrivers/$', views.UnassignedDrivers.as_view()),
    url(r'^assignment/$', views.AssignmentRegister.as_view()),         # assigns driver to vehicle
    url(r'^getvehiclebyid/$', views.GetVehicleRegister.as_view()),     # vehicle details by vehicle id
    # gives task details and creates task as well
    url(r'^createtask/$', views.TaskRegister.as_view()),
    url(r'^displaytask/$', views.DisplayTask.as_view()),
    url(r'^assigntask/$', views.TaskAssignmentRegister.as_view()),
    # list of unassigned tasks for assignment
    url(r'^unassignedtask/$', views.UnassignedTask.as_view()),
    # list of unassigned vehicles for task
    url(r'^unassignedvehicle/$', views.UnassignedVehicle.as_view()),
    url(r'^deletetask/$', views.DeleteTask.as_view()),                 # delete only unassigned task
    # Gives task assignment related all data
    url(r'^taskassignmentdetail/$', views.TaskAssignmentDetail.as_view()),

]

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^vehicle/$', views.FleetStatus.as_view()),  # list of all registered vehicle with detail
    # list of vehicles for adding details
    url(r'^vehicleforregistration/$', views.RegisteredVehicle.as_view()),
    url(r'^driver/$', views.DriverRegister.as_view()),                 # list of all active drivers
    # list of drivers for assigning them to vehicle
    url(r'^unassigneddrivers/$', views.UnassignedDrivers.as_view()),
    url(r'^assignment/$', views.AssignmentRegister.as_view()),         # assigns driver to vehicle
    url(r'^getvehiclebyid/$', views.GetVehicleRegister.as_view()),     # vehicle details by vehicle id
    url(r'^createtask/$', views.TaskRegister.as_view()),               # creates a new task
    url(r'^displaytask/$', views.DisplayTask.as_view()),               # shows the all created task
    # assigns vehicle to selected task
    url(r'^assigntask/$', views.TaskAssignmentRegister.as_view()),
    # gives free vehicles that can be assigned to selected task
    url(r'^vehiclefortaskassignment/$', views.VehicleForTaskAssignment.as_view()),
    url(r'^deletetask/$', views.DeleteTask.as_view()),                 # delete only unassigned task
    # Gives task assignment related all data e.g. unassigned tasks + unassigned vehicles + drivers on the selected vehicle
    url(r'^taskassignmentdetail/$', views.TaskAssignmentDetail.as_view()),
]

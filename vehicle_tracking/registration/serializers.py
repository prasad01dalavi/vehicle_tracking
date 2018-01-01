from rest_framework import serializers
from .models import Vehicle, Driver, Assignment, Task, TaskAssignment, DeviceActivation

# Serializers will help me to GET or POST the data in a correct and easy way


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'


class DeviceActivationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceActivation
        fields = '__all__'


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TaskAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskAssignment
        fields = '__all__'

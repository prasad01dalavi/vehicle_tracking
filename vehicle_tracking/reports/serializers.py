from rest_framework import serializers
from .models import Trip, MonthlyVehicleTasks

# Serializers will help me to GET or POST the data in a correct and easy way


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'


class MonthlyVehicleTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyVehicleTasks
        fields = '__all__'

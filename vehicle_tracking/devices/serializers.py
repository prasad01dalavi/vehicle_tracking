from rest_framework import serializers
from .models import DeviceData

# Serializers will help me to GET or POST the data in a correct and easy way


class DeviceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceData
        fields = '__all__'


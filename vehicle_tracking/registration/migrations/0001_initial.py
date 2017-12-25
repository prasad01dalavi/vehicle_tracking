# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-16 12:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='CustomerRegistration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255, null=True)),
                ('phone_number', models.CharField(max_length=10, null=True)),
                ('company', models.CharField(max_length=255)),
                ('fleet_size', models.CharField(max_length=5, null=True)),
                ('username', models.CharField(max_length=10, null=True)),
                ('password', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='DeviceActivation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('device_IMEI', models.CharField(max_length=20)),
                ('vehicle_registration_number', models.CharField(max_length=15)),
                ('select_customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.CustomerRegistration')),
            ],
        ),
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=10, null=True)),
                ('last_name', models.CharField(max_length=10, null=True)),
                ('address', models.CharField(max_length=100, null=True)),
                ('phone_number', models.CharField(max_length=10, null=True)),
                ('driver_card_id', models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('task_name', models.CharField(max_length=20, null=True)),
                ('source', models.CharField(max_length=255, null=True)),
                ('destination', models.CharField(max_length=255, null=True)),
                ('customer_delivery_date_time', models.CharField(max_length=30, null=True)),
                ('critical_start_time', models.CharField(max_length=30, null=True)),
                ('planned_start_time', models.CharField(max_length=30, null=True)),
                ('planned_end_time', models.CharField(max_length=30, null=True)),
                ('distance', models.CharField(max_length=15, null=True)),
                ('estimated_time', models.CharField(max_length=30, null=True)),
                ('priority', models.CharField(max_length=5, null=True)),
                ('action', models.CharField(max_length=5, null=True)),
                ('actual_start_time', models.CharField(blank=True, max_length=30, null=True)),
                ('actual_end_time', models.CharField(blank=True, max_length=30, null=True)),
                ('source_lat_long', models.CharField(max_length=100, null=True)),
                ('destination_lat_long', models.CharField(max_length=100, null=True)),
                ('estimated_reaching_hr', models.CharField(max_length=255, null=True)),
                ('task_status', models.CharField(default='0', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='TaskAssignment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assign_vehicle', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.DeviceActivation')),
                ('select_task', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.Task')),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('vehicle_make', models.CharField(max_length=20, null=True)),
                ('vehicle_type', models.CharField(max_length=20, null=True)),
                ('vehicle_tonnage', models.CharField(max_length=5, null=True)),
                ('vehicle_available_time', models.CharField(blank=True, max_length=50)),
                ('select_registration_number', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.DeviceActivation')),
            ],
            options={
                'verbose_name_plural': 'Vehicles',
            },
        ),
        migrations.AddField(
            model_name='assignment',
            name='assign_driver',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.Driver'),
        ),
        migrations.AddField(
            model_name='assignment',
            name='select_vehicle',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='registration.DeviceActivation'),
        ),
    ]
# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-30 18:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0003_deviceactivation_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='driver',
            name='driver_card_id',
            field=models.CharField(max_length=12, null=True),
        ),
    ]

# Generated by Django 3.1.1 on 2020-10-09 20:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0008_auto_20201010_0235'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 3, 25, 15, 95426)),
        ),
        migrations.AlterField(
            model_name='customer',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 3, 25, 15, 95426)),
        ),
        migrations.AlterField(
            model_name='person',
            name='birthdate',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 3, 25, 15, 95426)),
        ),
    ]

# Generated by Django 3.1.1 on 2020-09-20 05:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0002_auto_20200919_2343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 178958)),
        ),
        migrations.AlterField(
            model_name='customer',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 178958)),
        ),
        migrations.AlterField(
            model_name='person',
            name='birthdate',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 177960)),
        ),
    ]
# Generated by Django 3.1.1 on 2020-09-20 05:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_auto_20200920_1243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 44, 39, 960703)),
        ),
        migrations.AlterField(
            model_name='customer',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 44, 39, 960703)),
        ),
        migrations.AlterField(
            model_name='person',
            name='birthdate',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 44, 39, 959695)),
        ),
    ]
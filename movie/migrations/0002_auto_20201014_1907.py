# Generated by Django 3.1.1 on 2020-10-14 12:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 14, 19, 7, 55, 789264)),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2020, 10, 14, 19, 7, 55, 789264)),
        ),
        migrations.AlterField(
            model_name='movie',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 14, 19, 7, 55, 789264)),
        ),
    ]
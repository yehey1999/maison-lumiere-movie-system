# Generated by Django 3.1.1 on 2020-09-20 05:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0004_auto_20200919_2343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 174939)),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 174939)),
        ),
        migrations.AlterField(
            model_name='movie',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 9, 20, 12, 43, 4, 174939)),
        ),
    ]
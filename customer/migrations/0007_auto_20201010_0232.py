# Generated by Django 3.1.1 on 2020-10-09 19:32

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0006_auto_20200922_1413'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='email',
            field=models.EmailField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='customer',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 2, 31, 53, 606814)),
        ),
        migrations.AlterField(
            model_name='customer',
            name='updated_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 2, 31, 53, 606814)),
        ),
        migrations.AlterField(
            model_name='person',
            name='birthdate',
            field=models.DateField(default=datetime.datetime(2020, 10, 10, 2, 31, 53, 606814)),
        ),
        migrations.AlterField(
            model_name='person',
            name='middle_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='no_children',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='spouse_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='spouse_occupation',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='status',
            field=models.CharField(max_length=10),
        ),
    ]

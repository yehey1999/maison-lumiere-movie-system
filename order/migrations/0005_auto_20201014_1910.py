# Generated by Django 3.1.1 on 2020-10-14 12:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0004_auto_20201014_1910'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='due_at',
            field=models.DateField(default=datetime.datetime(2020, 11, 13, 19, 10, 47, 944936)),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_at',
            field=models.DateField(default=datetime.datetime(2020, 10, 14, 19, 10, 47, 944936)),
        ),
    ]
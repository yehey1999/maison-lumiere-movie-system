from django.db import models
from datetime import datetime

# Create your models here.

class Person(models.Model):
    first_name = models.CharField(max_length = 50)
    middle_name = models.CharField(blank=True, null=True, max_length = 50)
    last_name = models.CharField(max_length = 50)
    gender = models.CharField(max_length = 6)
    status = models.CharField(max_length = 10)
    birthdate = models.DateField(default = datetime.now())
    street = models.CharField(max_length = 50)
    barangay = models.CharField(max_length = 50)
    city = models.CharField(max_length = 50)
    province = models.CharField(max_length = 50)
    zipcode = models.CharField(max_length = 4)
    spouse_name = models.CharField(blank=True, null=True, max_length = 50)
    spouse_occupation = models.CharField(blank=True, null=True, max_length = 50)
    no_children = models.IntegerField(blank=True, null=True)
    email = models.EmailField(max_length = 50)
    
    class Meta:
        db_table = "Person"

class Customer(Person):
    image = models.ImageField(null=True, blank=True, upload_to = 'customers/')
    created_at = models.DateField(default = datetime.now())
    updated_at = models.DateField(default = datetime.now())

    class Meta:
        db_table = "Customer"

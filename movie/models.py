from django.db import models
from datetime import datetime

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.DateField(default=datetime.now())
    director = models.charField(max_length=100)
    price = models.FloatField(default=0.00)
    no_items = models.IntegerField(default=1)
    genres = models.CharField(max_length=255)
    casts = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    casts = models.CharField(max_length=255)
    images = models.CharField(max_length = 255)
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())
    
    class Meta:
        db_table = "Movie"

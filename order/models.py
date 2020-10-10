from django.db import models
from datetime import datetime, timedelta   
from movie.models import Movie
from customer.models import Customer

# Create your models here.
class Order(models.Model):
    customer = models.ForeignKey(to=Customer, on_delete=models.CASCADE)
    total = models.FloatField(default=0.00)
    quantity = models.IntegerField(default=1)
    order_at = models.DateField(default=datetime.now())
    due_at = models.DateField(default=datetime.now()+timedelta(days=30))
    movies = models.ManyToManyField(Movie)
    status = models.CharField(max_length = 6)
    
    class Meta:
        db_table = "Order"

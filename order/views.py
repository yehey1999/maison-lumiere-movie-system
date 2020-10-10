from django.shortcuts import render, HttpResponse
from django.views.generic import View

from .models import Order
from customer.models import Customer
from movie.models import Movie
from .forms import OrderForm

from json import dumps
    
import json
from django.core.serializers.json import DjangoJSONEncoder

from movie.models import Movie

class OrderMoviesView(View):
    def get(self, request):
        qs_movies = Movie.objects.all().values()
        
        json_movies = []
        for qs_movie in qs_movies:
            json_movie = dumps(qs_movie, indent = 4, cls=DjangoJSONEncoder) 
            json_movies.append(json_movie)
        
        movies = zip(qs_movies, json_movies)
        
        context = {
            'movies': movies,
        }
        return render(request, 'order-movies.html', context)


class OrderCustomersView(View):
    def get(self, request):
        
        customer = Customer.objects.get(id=id)
        
        context = {
            'customer': customer
        }
        
        return render(request, 'order-customers.html')

    def post(self, request):
        
        order = OrderForm(request.POST)

        if order.is_valid():
            movie_ids = request.POST.getlist('movie')
            customer_id = request.POST.get('customer_id')

            form = order.save(commit=False)
            form.customer = Customer.objects.get(person_ptr_id=customer_id)
            #form.customer = customer_id
            
            form.save()
            
            for id in movie_ids:
                movie = Movie.objects.get(id=id)
                if movie.no_items > 0:
                    form.movies.add(movie)
                else:
                    return  HttpResponse("Form not Valid")
            
            #order.save()
            order.save_m2m();
            
            for order in Order.objects.all():
                print(order.customer.last_name)
            
            return HttpResponse("Save Form")
  
        return HttpResponse("Order Form")
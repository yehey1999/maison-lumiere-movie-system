from django.shortcuts import render, HttpResponse
from django.views.generic import View

from .models import *

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
        return render(request, 'order-customers.html')
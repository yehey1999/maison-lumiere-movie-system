from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.generic import View

from .models import *
from .forms import MovieForm
# Create your views here.

from json import dumps
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers

class MovieRegistrationView(View):
    def get(self, request):
        return render(request, 'movie-registration.html')
    
    def post(self, request):
        form = MovieForm(request.POST)
        
        if(form.is_valid()):     
            title = request.POST.get('title')
            release_date = request.POST.get('release_date')
            director = request.POST.get('director')
            price = request.POST.get('price')
            no_items = request.POST.get('no_items') 
            genres = request.POST.get('genres')
            casts = request.POST.get('casts')  
            image = "" 
            if request.FILES.get('image'):
                image = request.FILES.get('image')
            movie = Movie(
                        title=title,
                        release_date=release_date,
                        director=director,
                        price = price,
                        casts = casts,
                        genres = genres,
                        no_items = no_items,
                        images=image
                    )
            movie.save()
            return JsonResponse({'success': True})
        else:
            print(form.errors)
            return JsonResponse({'success': False})



class MovieSummaryView(View):
    def get(self, request):
        qs_movies = Movie.objects.all().values()
        #qs_movies = Movie.objects.all()
        #json_movies = dumps(qs_movies)
        
        json_movies = []
        for qs_movie in qs_movies:
            #print(dumps(list(qs_movie), cls=DjangoJSONEncoder))
            #print(serializers.serialize('json', qs_movie))
            json_movie = dumps(qs_movie, indent = 4, cls=DjangoJSONEncoder) 
            json_movies.append(json_movie)
            #print(qs_movie[images.url)
        
        movies = zip(qs_movies, json_movies)
        
        context = {
            'movies': movies
            #'movies': qs_movies
            #'image': qs_movies[1].images.url
        }
        
        #print("hello");        
        #print(json_movies)
        print("hello world")
        
        return render(request, 'movie-summary.html', context)

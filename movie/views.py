from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.views.generic import View

from .models import *
from .forms import MovieForm
# Create your views here.

from json import dumps
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from django.urls import reverse

class MovieRegistrationView(View):
    def get(self, request):
        return render(request, 'movie-registration.html')
    
    def post(self, request):
        form = MovieForm(request.POST)
         
        if(form.is_valid()):     
            print(form)
            title = request.POST.get('title')
            release_date = request.POST.get('release_date')
            director = request.POST.get('director')
            price = request.POST.get('price')
            no_items = request.POST.get('no_items') 
            genres = request.POST.get('genres')
            casts = request.POST.get('casts')  
            image = request.FILES.get('image', '')
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
        
        json_movies = []
        for qs_movie in qs_movies:
            json_movie = dumps(qs_movie, indent = 4, cls=DjangoJSONEncoder) 
            json_movies.append(json_movie)
        
        movies = zip(qs_movies, json_movies)
        
        context = {
            'movies': movies
        }
        
        print("hello world")
        
        return render(request, 'movie-summary.html', context)
    
    def post(self, request):
        if 'deleteBtn' in request.POST:
            id = request.POST.get('movie-id')
            Movie.objects.filter(id=id).delete()
        
        elif 'updateBtn' in request.POST:
            movie = Movie.objects.get(id=request.POST.get('movie-id-update'))
        
            #instance means the existing model instance
            #if instance is supplied save() will automatically update the instance
            #take note: only the included fields are updated
            #field = ('', '', ....)
            form = MovieForm(request.POST, instance=movie)
            
            if form.is_valid():
                #commit == false, return a moive object that hasn’t yet been saved to the database
                #when you do this, you should call save() in order to save i
                movie = form.save(commit=False)
                
                movie.images = request.FILES.get('image', '')
                movie.genres = request.POST.get('movie-genres')
                movie.casts =  request.POST.get('movie-casts')
                
                movie.save()
                
                #return redirect('/movie')
            
        return redirect('movies:view')
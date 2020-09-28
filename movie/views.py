from django.shortcuts import render, redirect
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
        
        json_movies = []
        for qs_movie in qs_movies:
            json_movie = dumps(qs_movie, indent = 4, cls=DjangoJSONEncoder) 
            json_movies.append(json_movie)
        
        print("Request content:")
        print(request)
        
        movies = zip(qs_movies, json_movies)
        
        context = {
            'movies': movies
        }
        

        return render(request, 'movie-summary.html', context)


class MovieSummaryUpdate(View):
    def post(self, request, id):
        
        #movie = Movie.objects.get(id=id)
           
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
        #movie.update(
        #            title=title,
        #            release_date=release_date,
        #            director=director,
        #            price = price,
        #            casts = casts,
        #            genres = genres,
        #            no_items = no_items,
        #            images=image
        #        )
        casts=""
        genres=""
        
        movie = Movie.objects.get(id=id)
        movie.title = title
        movie.release_date = release_date
        movie.director = director
        #movie.genres = genres
        movie.no_items = no_items
        movie.images = image
        
        movie.save()
        # Movie.objects.filter(id=id).update( 
        #             title=title,
        #             release_date=release_date,
        #             director=director,
        #             price = price,
        #             casts = casts,
        #             genres = genres,
        #             no_items = no_items,
        #             images=image )
        
        return redirect('/movie')
    
        #form = MovieForm(request.POST, instance=movie)
        #image = "" 
        #if request.FILES.get('image'):
        #    image = request.FILES.get('image')
        #    movie.images = request.POST.get('image')
        #    form.images = movie.images
        
            
        
        return HttpResponse("error")
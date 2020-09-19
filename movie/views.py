from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import View

from .models import *
from .forms import MovieForm
# Create your views here.

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
            return JsonResponse({'success': 'true'})
        else:
            print(form.errors)
            return JsonResponse({'success': 'false'})



class MovieSummaryView(View):
    def get(self, request):
        return render(request, 'movie-summary.html')

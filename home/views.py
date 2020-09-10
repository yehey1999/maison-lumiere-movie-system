from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

class HomeLandingView(View):
    def get(self, request):
        return render(request, 'index.html')

class HomeLoginView(View):
    def get(self, request):
        return render(request, 'signUpIn.html')
        

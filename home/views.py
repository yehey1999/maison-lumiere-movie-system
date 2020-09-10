from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

class HomeLandingView(View):
    def get(self, request):
        return HttpResponse('Landing page')

class HomeLoginView(View):
    def get(self, request):
        return HttpResponse('Login page')
        

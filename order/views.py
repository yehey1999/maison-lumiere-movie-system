from django.shortcuts import render, HttpResponse
from django.views.generic import View

from .models import *


class CustomerOrdersView(View):
    def get(self, request):
        return HttpResponse("Customer Orders View")
    

class MoviesOrderView(View):
    def get(self, request):
        return HttpResponse("Movies Orders View")
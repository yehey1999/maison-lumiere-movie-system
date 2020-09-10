from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

class CustomerIndexRegister(View):
    def get(self, request):
        return render(request, 'customer-registration.html')

class CustomerIndexView(View):
    def get(self, request):
        return render(request, 'customer-summary.html')


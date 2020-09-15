from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

class CustomerRegistrationView(View):
    def get(self, request):
        return render(request, 'customer-registration.html')

class CustomerSummaryView(View):
    def get(self, request):
        return render(request, 'customer-summary.html')


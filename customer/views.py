from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from .forms import CustomerForm
from .models import *

# Create your views here.

class CustomerRegistrationView(View):
    def get(self, request):
        return render(request, 'customer-registration.html')

    def post(self, request):
        form = CustomerForm(request.POST)
        if form.is_valid():
            first_name = request.POST.get("first_name")
            middle_name = request.POST.get("middle_name")
            last_name = request.POST.get("last_name")
            gender = request.POST.get("gender")
            status = request.POST.get("status")
            birthdate = request.POST.get("birthdate")
            street = request.POST.get("street")
            barangay = request.POST.get("barangay")
            city = request.POST.get("city")
            province = request.POST.get("province")
            zipcode = request.POST.get("zipcode")
            spouse_name = request.POST.get("spouse_name")
            spouse_occupation = request.POST.get("spouse_occupation")
            no_children = request.POST.get("no_children")
            image = ""
            if request.FILES.get("image"):
                image = request.FILES.get("image")

            form = Customer(first_name = first_name, middle_name = middle_name, last_name = last_name, 
                            gender = gender, status = status, birthdate = birthdate, street = street,
                            barangay = barangay, city = city, province = province, zipcode = zipcode,
                            spouse_name = spouse_name, spouse_occupation = spouse_occupation, no_children = no_children,
                            image = image)

            form.save()

            #return HttpResponse('Customer record saved~')
            return JsonResponse({'success': True})

        else:
            print(form.errors)
            #return HttpResponse('Invalid :(')
            return JsonResponse({'success': False})

class CustomerSummaryView(View):
    def get(self, request):
        return render(request, 'customer-summary.html')


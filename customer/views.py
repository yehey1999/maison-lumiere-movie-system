from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from .forms import CustomerForm
from .models import *

from json import dumps

import json
from django.core.serializers.json import DjangoJSONEncoder

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

            return JsonResponse({'success': True})

        else:
            print(form.errors)
            return JsonResponse({'success': False})

class CustomerSummaryView(View):
    def get(self, request):
        qs_customers = Customer.objects.all().values()
        
        json_customers = []
        for qs_customer in qs_customers:
            json_customer = dumps(qs_customer, indent = 4, cls=DjangoJSONEncoder) 
            json_customers.append(json_customer)

        customers = zip(qs_customers, json_customers)

        context = {
            'customers': customers
        }
        
        return render(request, 'customer-summary.html', context)
    
    def post(self, request):
        if request.method == 'POST':
            if 'deleteBtn' in request.POST:
                customer_id = request.POST.get("customer_id1")
                delete_customer = Customer.objects.filter(person_ptr_id=customer_id).delete()
                delete_person = Person.objects.filter(id = customer_id).delete()
                return redirect('/customer')

            elif 'saveBtn' in request.POST:
                customer_id = request.POST.get("customer_id2")
                customer = Customer.objects.get(person_ptr_id=customer_id)
                form = CustomerForm(request.POST, instance=customer)

                if form.is_valid():
                    customer = form.save(commit=False)
                    middle_name = request.POST.get("middle_name")
                    spouse_name = request.POST.get("spouse_name")
                    spouse_occupation = request.POST.get("spouse_occupation")
                    no_children = request.POST.get("no_children")
                    image = request.FILES.get("image", "")
                    customer.save()
                    return redirect('/customer')


        return HttpResponse("error")

from django.shortcuts import render, HttpResponse
from django.views.generic import View

from .models import Order
from .models import Customer
from movie.models import Movie
from .forms import OrderForm


class CustomerOrdersView(View):
    def get(self, request):
        return render(request, 'test.html')
    
    def post(self, request):
        
        order = OrderForm(request.POST)

        if order.is_valid():
            movie_ids = request.POST.getlist('movie')
            customer_id = request.POST.get('customer_id')

            form = order.save(commit=False)
            form.customer = Customer.objects.get(person_ptr_id=customer_id)
            #form.customer = customer_id
            
            form.save()
            
            for id in movie_ids:
                movie = Movie.objects.get(id=id)
                if movie.quantity > 0:
                    form.movies.add(movie)
                else:
                    return  HttpResponse("Form not Valid")
            
            #order.save()
            order.save_m2m();
            
            for order in Order.objects.all():
                print(order.customer.last_name)
            
            return HttpResponse("Save Form")
  
        return HttpResponse("Order Form")
    

class MoviesOrderView(View):
    def get(self, request):
        return HttpResponse("Movies Orders View")
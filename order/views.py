from django.shortcuts import render, HttpResponse, redirect
from django.views.generic import View

from .models import Order
from customer.models import Customer
from movie.models import Movie
from .forms import OrderForm

from movie.models import Movie

#responsible in movie orders page
#this page is where the admin choose the movies chosen by the customer
class OrderMoviesView(View):
    def get(self, request, id):
        
        #get all the movies which has quantity greater than 0
        movies = Movie.objects.filter(no_items__gt=0)
        
        #get the customer details based on the id - a url parameter
        #check the urls.py in this app
        #in order to get the parameter of the this url
        #add parameter in the method
        #this is used so that we will know the customer name
        customer = Customer.objects.get(id=id)
        
        #add these to context
        #so that we can pass it the body
        context = {
            'movies': movies,
            'customer': customer
        }
        
        
        return render(request, 'order-movies.html', context)


#responsible for:
# get: displays all the orders of the customer
# post: handles the order movie order of the customer and redirects to orders-customer.html to display all the orders
class OrderCustomersView(View):
    def get(self, request):
        #get all the order objects
        #customers = Customer.objects.filter(is_deleted=False)
        
        #orders = customers.order_set.all()
        #orders = Order.objects.filter(is_deleted=False)
            
        #reverse relationship
        #https://www.webforefront.com/django/setuprelationshipsdjangomodels.html
        orders = Order.objects.filter(customer__is_deleted=False)
        
        #add this to context
        context = {
            "orders": orders
        }
        
        return render(request, 'order-customers.html', context)

    def post(self, request):
        
        if 'deleteBtn' in request.POST:
            id = request.POST.get('order-id')
            
            order = Order.objects.get(id=id)
            
            for _movie in order.movies.all():
                movie = Movie.objects.get(id=_movie.id)
                movie.no_items += 1
                movie.save()
            
            order.is_deleted = True
            order.save()
            
            return redirect("order:customer-order")
        
        else:    
            form = OrderForm(request.POST)
            
            #check if form is valid
            if form.is_valid():
                
                #get all the movie input which a name attribute of movie: input[name=movie]
                movie_ids = request.POST.getlist('movie')
                
                #get the customer id 
                customer_id = request.POST.get('customer_id')

                #make the order form commit=false
                #so that we can edit the form
                #If your model has a many-to-many relation and you specify commit=False when you save a form
                #Django cannot immediately save the form data for the many-to-many relation
                #This is because it isn’t possible to save many-to-many data for an instance until the instance exists in the database.
                order = form.save(commit=False)
                
                #link to the customer who order
                order.customer = Customer.objects.get(person_ptr_id=customer_id)
                
                #save the form
                order.save()
                
                #iterate on all the movie ids
                for id in movie_ids:
                    #get the movie object
                    movie = Movie.objects.get(id=id)
                    
                    #check if movie items is greater than 0
                    if movie.no_items > 0:
                        #if true, link the movie to the order
                        order.movies.add(movie)
                        
                        #decrement the movie no_items by -1
                        movie.no_items -= 1;
                        
                        #save the movie
                        movie.save()
                    else:
                        return  HttpResponse("Form not Valid")
                
                #order.save()
                #After you’ve manually saved the instance produced by the form, you can invoke save_m2m() to save the many-to-many form data
                form.save_m2m();
                
                #redirect to customers orders to view the orders details
                return redirect("order:customer-order")
  
        return HttpResponse("Order Form")

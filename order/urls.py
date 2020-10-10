from django.urls import path
from . import views

app_name = 'order'

urlpatterns = [
    path('customers/', views.CustomerOrdersView.as_view(), name="customer-order"),
    path('movies/', views.MoviesOrderView.as_view(), name="movie-order")
]

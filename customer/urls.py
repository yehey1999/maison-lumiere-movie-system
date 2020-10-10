from django.urls import path
from . import views

app_name = 'customer'

urlpatterns = [
    path('', views.CustomerSummaryView.as_view(), name="view"),
    path('register/', views.CustomerRegistrationView.as_view(), name="register"),
    path('order/movies/', views.OrderMoviesView.as_view(), name="ordermovie"),
    path('order/customers/', views.OrderCustomersView.as_view(), name="ordercustomer"),
]
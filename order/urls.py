from django.urls import path
from . import views

app_name = 'order'

urlpatterns = [
    path('customers/', views.OrderCustomersView.as_view(), name="customer-order"),
    path('movies/<int:id>', views.OrderMoviesView.as_view(), name="movie-order")
]

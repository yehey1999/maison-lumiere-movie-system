from django.urls import path

from . import views

app_name = 'movie'

urlpatterns = [
    path('', views.MovieSummaryView.as_view(), name="view"),
    path('register/', views.MovieRegistrationView.as_view(), name="register")
]

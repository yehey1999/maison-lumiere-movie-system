from django.urls import path

from . import views

app_name = 'movie'

urlpatterns = [
    path('', views.MovieIndexView.as_view(), name="view"),
    path('register/', views.MovieIndexRegister.as_view(), name="register")
]

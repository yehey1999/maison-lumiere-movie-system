from django.urls import path

from . import views

app_name = 'home'

urlpatterns = [
    path('', views.HomeLandingView.as_view(), name="view"),
    path('login/', views.HomeLoginView.as_view(), name="login")
]

from django.urls import path

from . import views

app_name = 'customer'

urlpatterns = [
    path('', views.CustomerIndexView.as_view(), name="view"),
    path('register/', views.CustomerIndexRegister.as_view(), name="register")
]
from django import forms
from .models import *

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = ('first_name', 'last_name', 'gender', 'status', 'birthdate', 'street', 'barangay', 'city', 'province', 'zipcode')
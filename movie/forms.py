from django import forms

from .models import *

class MovieForm(forms.ModelForm):
    class Meta:
        model = Movie
        fields = ('title', 'release_date', 'director', 'price', 'no_items', 'images')
        #fields = '__all__'    

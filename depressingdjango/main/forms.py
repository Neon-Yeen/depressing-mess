from django import forms
from .models import product
from datetime import date

# creating a form
class productform(forms.ModelForm):
 
    # create meta class
    class Meta:
        # specify model to be used
        model = product
        
        # specify fields to be used
        fields = [
            "product_id",
            "product_name",
            "product_img",
            "product_price",
            "product_stock",
            
            

        ]
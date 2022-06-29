from rest_framework import serializers
from .models import product

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ["product_id","product_name","product_img","product_price","product_stock"]

from django.db import models

# Create your models here.
class product(models.Model):
    product_id = models.IntegerField()
    product_name = models.CharField(max_length=40)
    product_img = models.CharField(max_length=100)
    product_price = models.IntegerField()
    product_stock = models.IntegerField()
    modified = models.DateTimeField((""), auto_now=False, auto_now_add=True)
    

    def __str__(self):
        return self.text
# Generated by Django 4.0.4 on 2022-06-15 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_product_delete_item_delete_warehouse'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_img',
            field=models.CharField(default=404, max_length=100),
            preserve_default=False,
        ),
    ]
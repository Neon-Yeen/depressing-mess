# Generated by Django 4.0.4 on 2022-06-15 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_item_complete'),
    ]

    operations = [
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.IntegerField()),
                ('product_name', models.CharField(max_length=40)),
                ('product_price', models.IntegerField()),
                ('product_stock', models.IntegerField()),
                ('modified', models.DateField()),
            ],
        ),
        migrations.DeleteModel(
            name='Item',
        ),
        migrations.DeleteModel(
            name='warehouse',
        ),
    ]
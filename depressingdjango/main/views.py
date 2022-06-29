from math import prod
from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .serializers import ProductoSerializer


from  .forms import productform
from .models import product

def index(response):
     context ={}
 
     # add the dictionary during initialization
     context["dataset"] = product.objects.all()

     return render(response, "main/index.html",context)

def e404(response):
     return render(response, "main/404.html",{})


def aboutus(response):
     return render(response, "main/aboutus.html",{})


def login(response):
     return render(response, "main/login.html",{})

     
def signin(response):
     return render(response, "main/signin.html",{})

def termsservices(response):
     return render(response, "main/termsservices.html",{})


def create(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    form = productform(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/list")
         
    context['form']= form
    return render(request, "main/create.html", context)

def list(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    context["dataset"] = product.objects.all()
         
    return render(request, "main/list.html", context)

def view(request, id):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    context["data"] = product.objects.get(id = id)
         
    return render(request, "main/view.html", context)

def update(request, id):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    obj = get_object_or_404(product, id = id)
 
    # pass the object as instance in form
    form = productform(request.POST or None, instance = obj)
 
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/list")
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "main/update.html", context)

def delete(request, id):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    obj = get_object_or_404(product, id = id)
 
 
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to
        # home page
        return HttpResponseRedirect("/list")
 
    return render(request, "main/delete.html", context)

#REST API PRODUCTO

@csrf_exempt
@api_view(['GET','POST'])

def create_producto(request):
    if request.method == 'GET':
        producto = product.objects.all()
        serializer = ProductoSerializer(producto, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        data=JSONParser().parse(request)
        serializer = ProductoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','POST','DELETE'])

def edit_producto(request, id):
    try:
         producto = product.objects.get(product_id=id)
    except producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer= ProductoSerializer(producto)
        return Response(serializer.data)
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(producto,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

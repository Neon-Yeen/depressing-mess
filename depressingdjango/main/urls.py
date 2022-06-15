from django.urls import URLPattern, path

from . import views

urlpatterns = [
path("", views.index, name="index"),
path("404/", views.e404, name="404"),
path("aboutus/", views.aboutus, name="aboutus"),
path("termsservices/", views.termsservices, name="termsservices"),
path("create/", views.create, name="create"),
path("list/", views.list, name="list"),
path('sp/<id>', views.view, name="view" ),
path('update/<id>',views.update,name="update"),
path('delete/<id>', views.delete,name="delete" ),

]

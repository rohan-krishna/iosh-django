from django.conf.urls import url
from . import views

urlpatterns = [
	
	url(r'^$', views.index, name='index'),
	url(r'^get-notebooks/$', views.getNotebooks, name='get-notebooks'),

]
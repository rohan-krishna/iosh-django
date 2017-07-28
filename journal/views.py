import json
from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.core import serializers
from .models import Notebook

# Create your views here.
def index(request):
	return render(request, 'journal/index.html', {})

def getNotebooks(request):
	notebooks = Notebook.objects.all()
	data = serializers.serialize("json", notebooks)

	return HttpResponse(data, content_type="application/json")
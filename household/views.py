from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def index(request):
	response = JsonResponse({'message':'Hello World!'})
	return render(request, 'household/index.html', {})
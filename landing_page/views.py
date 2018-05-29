from django.shortcuts import render, redirect

# Create your views here.
def somin(request):
    return render(request, 'landing_page/somin.html')

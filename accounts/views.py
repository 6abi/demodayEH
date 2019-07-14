from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic

#Create your views here.
class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/register.html"
# #função de cadastro do usuario
# def register(request):
#     form = UserCreationForm()
#     return render(request, 'registration/register.html', {'form': form})
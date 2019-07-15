from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django import forms
from django.contrib import messages
import datetime

# Create your views here.
def mostrar_index(request):
    return render(request, 'index.html')

def mostrar_contato(request):
    data = {}
    if request.method == 'POST':
        data['nome'] = request.POST.get('nome', 'name not found')
        data['assunto'] = request.POST.get('assunto', 'assunto not found')
        data['email'] = request.POST.get('email', 'email not found')
        data['telefone'] = request.POST.get('telefone', 'telefone not found')
        data['conteudo'] = request.POST.get('conteudo', 'conteudo not found')
    return render(request, 'contato.html', data)

def mostrar_sobre(request):
    return render(request, 'sobre.html')

@login_required
def mostrar_usuario(request):
    return render(request, 'rotas/usuario.html')

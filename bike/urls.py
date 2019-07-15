
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from app import views
from django.contrib.auth import urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.mostrar_index),
    path('contato', views.mostrar_contato),
    path('sobre', views.mostrar_sobre),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('rotas/usuario/', views.mostrar_usuario),
    ]

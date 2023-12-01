from django.urls import path
from users.views import TokenView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

from django.views.generic import TemplateView


urlpatterns = [
    path('login/', TokenView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('', TemplateView.as_view(template_name='index.html')),
]
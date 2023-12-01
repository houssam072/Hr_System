
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import TokenSerializer,RegisterSerializer,UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status, permissions
from . import serializer
from rest_framework.response import Response




# Create your views here.

class TokenView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = TokenSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes =(AllowAny,)
    serializer_class = RegisterSerializer
    


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    # authentication_classes = (SessionAuthentication,)

    def get(self, request):
        print(request.user)
        serialized = serializer.UserSerializer(request.user)
        return Response({'user': serialized.data},
                        status=status.HTTP_200_OK)
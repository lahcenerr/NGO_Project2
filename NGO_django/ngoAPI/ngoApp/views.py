from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import UserSerializer,DonationSerializer,EventSerializer,RegisterSerializer
from .models import User,Donation,Event,Register

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DonationList(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

class EventList(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class RegisterList(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

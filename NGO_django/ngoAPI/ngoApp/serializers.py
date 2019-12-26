from rest_framework import serializers
from . models import User,Donation,Event,Register
# from django.contrib.auth.models import


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Donation
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = '__all__'

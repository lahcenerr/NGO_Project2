from rest_framework import serializers
from . models import User,Donation,Event
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

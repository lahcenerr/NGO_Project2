from django.contrib import admin
from .models import User,Donation,Event
# Register your models here.

admin.site.register(User)
admin.site.register(Donation)
admin.site.register(Event)
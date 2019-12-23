from django.db import models

# Create your models here.
class User(models.Model):
    Firstname = models.CharField(max_length=20)
    Lastname= models.CharField(max_length=20)
    Email = models.CharField(max_length=50)
    Password = models.CharField(max_length=20)
    Role = models.CharField(max_length=20)

    def __str__(self):
        return self.Firstname

class Donation(models.Model):
    Name = models.CharField(max_length=20)
    Date = models.DateTimeField()
    Amount=models.DecimalField(max_digits=10, decimal_places=2)
    EventName= models.CharField(max_length=20)
    UserID = models.IntegerField()
    EventID = models.IntegerField()

    def __str__(self):
        return self.Name

class Event(models.Model):
    Name = models.CharField(max_length=20)
    Date = models.DateTimeField()
    Location = models.CharField(max_length=20)
    Status = models.CharField(max_length=20)

    def __str__(self):
        return self.Name
# Generated by Django 2.2.7 on 2019-12-23 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ngoApp', '0008_auto_20191223_1949'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='Date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='Date',
            field=models.DateTimeField(),
        ),
    ]
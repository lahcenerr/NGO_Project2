# Generated by Django 3.0.1 on 2019-12-21 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ngoApp', '0003_donation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='Amount',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
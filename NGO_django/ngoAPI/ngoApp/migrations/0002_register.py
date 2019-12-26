# Generated by Django 2.2.5 on 2019-12-26 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ngoApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('No_of_People', models.IntegerField()),
                ('EventID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ngoApp.Event')),
                ('UserID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ngoApp.User')),
            ],
        ),
    ]
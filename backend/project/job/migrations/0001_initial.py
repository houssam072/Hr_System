# Generated by Django 4.2.7 on 2023-11-27 19:59

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import job.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('department', models.CharField(choices=[('IT', 'IT'), ('HR', 'HR')], max_length=25)),
                ('desc', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to=job.models.file_upload)),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Apply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(blank=True, max_length=255, null=True)),
                ('first_name', models.CharField(max_length=120)),
                ('last_name', models.CharField(max_length=120)),
                ('birth_date', models.DateField()),
                ('department', models.CharField(choices=[('IT', 'IT'), ('HR', 'HR')], max_length=25)),
                ('experiense', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('cv', models.FileField(upload_to=job.models.file_upload, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'Docs', 'docx'])])),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='apply_job', to='job.job')),
            ],
        ),
    ]

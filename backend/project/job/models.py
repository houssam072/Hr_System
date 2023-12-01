from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator


department = (
    ('IT' , 'IT'),
    ('HR' , 'HR')
)


def file_upload(instance, filename):
    filename, extension = filename.split('.')
    return "%s/%s.%s"%(instance.__class__.__name__ ,str(instance.id),extension) 

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=100)
    department = models.CharField(max_length= 25, choices=department)
    desc = models.CharField(max_length=200)
    image = models.ImageField(upload_to= file_upload)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Apply(models.Model):
    job = models.ForeignKey(Job, related_name='apply_job', on_delete=models.CASCADE)
    job_title = models.CharField(max_length=255, blank=True, null=True)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    birth_date = models.DateField()
    department = models.CharField(max_length = 25,choices= department)
    experiense = models.IntegerField()
    created_at = models.DateTimeField(auto_now=True)
    cv = models.FileField(upload_to=file_upload, 
        validators = [FileExtensionValidator(allowed_extensions=['pdf', 'Docs', 'docx']),])

    def __str__(self):
        return f'apply number {self.id} for :{self.job} position by {self.first_name} {self.last_name}'



    def save(self, *args, **kwargs):
        if self.job:
            self.job_title = self.job.title
        super().save(*args, **kwargs)


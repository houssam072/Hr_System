from rest_framework import serializers
from job.models import Job, Apply

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class ApplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Apply
        fields = ('id','created_at','first_name','last_name','birth_date','department','experiense','cv','job')
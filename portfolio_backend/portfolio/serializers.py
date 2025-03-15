from rest_framework import serializers
from .models import Project, AboutMe

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'
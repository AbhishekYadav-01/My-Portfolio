from rest_framework import generics
from .models import Project, AboutMe
from .serializers import ProjectSerializer, AboutMeSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AboutMeDetail(generics.RetrieveAPIView):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer
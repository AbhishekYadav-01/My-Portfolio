from rest_framework import generics
from .models import Project, AboutMe, Skill, Experience, Education
from .serializers import ProjectSerializer, AboutMeSerializer, SkillSerializer, ExperienceSerializer, EducationSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# portfolio/views.py
class AboutMeDetail(generics.RetrieveAPIView):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer
    lookup_field = None  # Disable lookup field

    def get_object(self):
        return AboutMe.objects.first()  # Return first AboutMe entry
class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ExperienceList(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class EducationList(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
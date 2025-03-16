from django.urls import path
from .views import ProjectList, AboutMeDetail, SkillList, ExperienceList, EducationList
from .views import ChatView

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('about-me/', AboutMeDetail.as_view(), name='about-me-detail'),
    path('skills/', SkillList.as_view(), name='skill-list'),
    path('experience/', ExperienceList.as_view(), name='experience-list'),
    path('education/', EducationList.as_view(), name='education-list'),
    path('chat/', ChatView.as_view(), name='chat'),

]
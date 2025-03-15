from django.urls import path
from .views import ProjectList, AboutMeDetail

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('about-me/', AboutMeDetail.as_view(), name='about-me-detail'),
]
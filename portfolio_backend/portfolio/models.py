from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    link = models.URLField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class AboutMe(models.Model):
    bio = models.TextField()
    skills = models.TextField()
    experience = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "About Me"
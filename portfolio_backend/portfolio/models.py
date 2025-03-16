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

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=0)  # Proficiency level (0-100)

    def __str__(self):
        return self.name

class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.position} at {self.company}"

class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.degree} at {self.institution}"
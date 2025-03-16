from rest_framework import generics
from .models import Project, AboutMe, Skill, Experience, Education
from .serializers import ProjectSerializer, AboutMeSerializer, SkillSerializer, ExperienceSerializer, EducationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from groq import Groq
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from PyPDF2 import PdfReader
import os

# Initialize Groq client
groq_client = Groq(api_key="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")  # Replace with your Groq API key

# Initialize Sentence Transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

# Load resume text from PDF
RESUME_PDF_PATH = os.path.join(os.path.dirname(__file__), 'resume.pdf')  # Path to your resume PDF
resume_text = extract_text_from_pdf(RESUME_PDF_PATH)
resume_embedding = model.encode(resume_text)

# Build FAISS index
dimension = resume_embedding.shape[0]
index = faiss.IndexFlatL2(dimension)
index.add(np.array([resume_embedding]))

class ChatView(APIView):
    def post(self, request):
        question = request.data.get('question')
        if not question:
            return Response({"error": "Question is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Step 1: Retrieve the most relevant chunk using FAISS
        question_embedding = model.encode(question)
        distances, indices = index.search(np.array([question_embedding]), k=1)
        relevant_chunk = resume_text  # Replace with actual chunk retrieval logic

        # Step 2: Answer the question using Groq API
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant that provides answers based on the provided context."},
                {"role": "user", "content": f"Context: {relevant_chunk}\n\nQuestion: {question}"}
            ],
            model="mixtral-8x7b-32768"
        )

        # Step 3: Return the answer
        answer = response.choices[0].message.content
        return Response({"answer": answer}, status=status.HTTP_200_OK)
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
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

from django.core.cache import cache  # Use Django's cache to store conversation history

class ChatView(APIView):
    def post(self, request):
        question = request.data.get('question')
        if not question:
            return Response({"error": "Question is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Step 1: Retrieve the most relevant chunk using FAISS
        question_embedding = model.encode(question)
        distances, indices = index.search(np.array([question_embedding]), k=1)
        relevant_chunk = resume_text  # Use the entire resume or chunk it

        # Step 2: Retrieve or initialize conversation history
        session_id = request.session.session_key  # Use session ID to track conversations
        if not session_id:
            request.session.create()  # Create a session if it doesn't exist
            session_id = request.session.session_key

        conversation_history = cache.get(session_id, [])  # Retrieve history from cache

        # Step 3: Craft a personalized prompt for Groq API
        groq_prompt = f"""
        You are Abhishek Yadav, a college student.
        Answer the question below in FIRST PERSON as if you're directly speaking to the HR representative.
        STRICTLY use ONLY the information from your resume below. If the answer isn't in the resume, say "I don't have experience with that yet."
        Keep your answers SHORT, PRECISE, and PROFESSIONAL. Do not provide unnecessary details.

        Resume Context:
        {relevant_chunk}

        Previous Conversation:
        {self.format_conversation_history(conversation_history)}

        Question: {question}
        Answer:
        """

        # Step 4: Answer the question using Groq API
        response = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system", 
                    "content": "You are Abhishek Yadav. Answer questions in FIRST PERSON as a professional. Keep your answers SHORT and PRECISE."
                },
                *conversation_history,  # Include previous conversation history
                {"role": "user", "content": groq_prompt}
            ],
            model="mixtral-8x7b-32768",
            temperature=0.3,  # Reduce creativity to avoid hallucinations
        )

        # Step 5: Update conversation history
        answer = response.choices[0].message.content
        conversation_history.extend([
            {"role": "user", "content": question},
            {"role": "assistant", "content": answer}
        ])
        cache.set(session_id, conversation_history, timeout=3600)  # Store history for 1 hour

        # Step 6: Return the answer
        return Response({"answer": answer}, status=status.HTTP_200_OK)

    def format_conversation_history(self, history):
        """Helper function to format conversation history for the prompt."""
        return "\n".join([f"{msg['role']}: {msg['content']}" for msg in history])
    
    
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
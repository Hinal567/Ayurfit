from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = FastAPI()

# Enable CORS so your Next.js UI can talk to this Python script
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Loading AyurFit Brain...")
# Ensure "final ayurfit.csv" is in the same folder as this file!
df = pd.read_csv('final ayurfit.csv')
model = SentenceTransformer('all-MiniLM-L6-v2')

# Pre-calculate knowledge base (Disease + Symptoms)
knowledge_base = (df['Disease'] + " " + df['Symptoms']).fillna('').tolist()
knowledge_embeddings = model.encode(knowledge_base)
print("AyurFit is ready!")

@app.post("/analyze")
async def analyze(request: Request):
    data = await request.json()
    user_symptoms = data.get("symptoms", "")
    
    # ML Prediction Logic
    user_embedding = model.encode([user_symptoms])
    similarities = cosine_similarity(user_embedding, knowledge_embeddings).flatten()
    index = np.argmax(similarities)
    
    # We use 'match' here to store the best row from your CSV
    match = df.iloc[index]
    
    return {
        "disease": str(match['Disease']),
        "herbs": str(match['Ayurvedic Herbs']),
        "diet": str(match['Diet and Lifestyle Recommendations']),
        "yoga": str(match['Yoga & Physical Therapy']),
        "confidence": float(np.max(similarities))
    }


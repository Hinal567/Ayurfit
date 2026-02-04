from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np

BASE_DIR = Path(__file__).resolve().parent
DATASET_PATH = BASE_DIR / "dataset" / "data.csv"



app = FastAPI(title="AyurFit API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = None
model = None
knowledge_embeddings = None

# -------------------------------
# Startup Event (IMPORTANT)
# -------------------------------
@app.on_event("startup")
def load_model_and_data():
    global df, model, knowledge_embeddings

    print("Loading AyurFit Brain...")

    # Load CSV
    df = pd.read_csv("../dataset/data.csv")

    # Prepare knowledge base
    disease_text = df["Disease"].fillna("").astype(str)
    symptom_text = df["Symptoms"].fillna("").astype(str)
    knowledge_base = (disease_text + " " + symptom_text).tolist()

    # Load model
    model = SentenceTransformer("all-MiniLM-L6-v2")

    # Encode once
    knowledge_embeddings = model.encode(
        knowledge_base,
        convert_to_numpy=True,
        normalize_embeddings=True
    )

    print("AyurFit is ready!")

# -------------------------------
# API Endpoint
# -------------------------------
@app.post("/analyze")
async def analyze(request: Request):
    data = await request.json()
    user_symptoms = data.get("symptoms")

    if not user_symptoms:
        return {"error": "Symptoms text is required"}

    # Encode user input
    user_embedding = model.encode(
        [user_symptoms],
        convert_to_numpy=True,
        normalize_embeddings=True
    )

    # Similarity search
    similarities = cosine_similarity(user_embedding, knowledge_embeddings)[0]
    best_index = int(np.argmax(similarities))
    confidence = float(similarities[best_index])

    match = df.iloc[best_index]

    return {
        "disease": str(match.get("Disease", "")),
        "herbs": str(match.get("Ayurvedic Herbs", "")),
        "diet": str(match.get("Diet and Lifestyle Recommendations", "")),
        "yoga": str(match.get("Yoga & Physical Therapy", "")),
        "confidence": round(confidence, 4)
    }

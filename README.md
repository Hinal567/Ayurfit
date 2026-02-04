# 🌿 AyurFit - AI-Powered Ayurvedic Healthcare Assistant

AyurFit is a full-stack Ayurvedic health assistant that pairs a Next.js UI with a FastAPI + Sentence Transformers backend. It analyzes a user's symptom text, matches it to the closest disease entry in a curated dataset, and returns herb, diet, and yoga recommendations.

## 🎯 Project Overview

AyurFit combines modern NLP with traditional Ayurvedic guidance to:
- Analyze free-form symptom descriptions
- Match symptoms to diseases using semantic similarity
- Provide recommended herbs, dietary guidance, and yogic practices
- Present results with a confidence score for transparency

## 🏗️ Tech Stack

### Frontend
- **Framework:** Next.js 16 / React 19 (App Router)
- **Styling:** Tailwind CSS v4 + custom design system
- **UI Components:** Radix UI primitives

### Backend
- **Framework:** FastAPI (Python)
- **NLP Model:** Sentence Transformers (`all-MiniLM-L6-v2`)
- **Similarity:** Scikit-learn (cosine similarity)
- **Data:** Pandas + NumPy

## 📁 Project Structure

```
Ayurfit/
├── app/                         # Next.js app directory
│   ├── components/              # UI components
│   │   ├── clinical-card.jsx
│   │   ├── confidence-gauge.jsx
│   │   ├── header.jsx
│   │   ├── herb-illustrations.jsx
│   │   ├── symptom-input.jsx
│   │   └── ui/                  # Reusable UI primitives
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx                 # Main UI
├── backend/
│   └── main.py                  # FastAPI backend
├── dataset/
│   └── data.csv                 # Disease dataset
├── model/
│   └── ayurfit_nlp.ipynb         # Model development notebook
├── package.json
└── pnpm-lock.yaml
```

## 🚀 How to Run

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or pnpm

### Step 1: Install Python Dependencies
```bash
cd backend
pip install fastapi uvicorn pandas sentence-transformers scikit-learn numpy
```

### Step 2: Start the Backend (FastAPI)
```bash
uvicorn main:app --reload
```
The backend starts at **http://127.0.0.1:8000**.
- First startup can take a couple of minutes while the model loads.
- API docs: http://127.0.0.1:8000/docs

### Step 3: Start the Frontend (Next.js)
Open a **new terminal**:
```bash
cd ..
npm install
npm run dev
```
The frontend runs at **http://localhost:3000**.

### Step 4: Use the App
1. Open http://localhost:3000 in your browser
2. Enter symptoms (e.g., "headache and fever")
3. View the clinical assessment with recommendations

## 🧠 How It Works

### Machine Learning Pipeline
1. **Data Preparation**
   - `dataset/data.csv` contains diseases, symptoms, herbs, diet, and yoga fields
   - Disease names + symptoms are combined into a search corpus

2. **Embedding Generation**
   ```python
   model = SentenceTransformer("all-MiniLM-L6-v2")
   knowledge_embeddings = model.encode(knowledge_base, normalize_embeddings=True)
   ```

3. **Symptom Matching**
   - User symptoms are embedded
   - Cosine similarity against the full dataset
   - Best match is returned with a confidence score

4. **Result Delivery**
   - API returns disease, herbs, diet, yoga, and confidence
   - UI formats CSV text into readable bullet lists

### Note on Patient Details
The UI collects age, gender, and severity, but the current backend only uses the `symptoms` text for matching. These fields are ready for future personalization.

## 📊 Dataset

The dataset includes **1,300 diseases across 18 Ayurvedic categories**, such as:
- Neurological Disorders
- Digestive System Disorders
- Respiratory Disorders
- Cardiovascular Disorders
- Musculoskeletal Disorders
- Mental Health Disorders

## 🔗 API Endpoints

### POST `/analyze`
Analyzes symptoms and returns Ayurvedic recommendations.

**Request:**
```json
{
  "symptoms": "headache and fever"
}
```

**Response:**
```json
{
  "disease": "Common Cold",
  "herbs": "Tulsi, Ginger, Turmeric",
  "diet": "Warm fluids, light meals",
  "yoga": "Pranayama, Anulom Vilom",
  "confidence": 0.87
}
```

## 🤝 Contributing

This project is part of an AI healthcare research initiative. For questions or contributions, please contact the repository owner.

## 📝 Note

This is an AI-generated suggestion tool. Always consult a qualified Ayurvedic practitioner (Vaidya) before starting any treatment.

## 🔗 Links

- **Vercel Deployment:** https://vercel.com/hinals-projects-4220bf4b/v0-ayur-fit-healthcare-ui
- **v0.app Chat:** https://v0.app/chat/uijdnQWs9jK
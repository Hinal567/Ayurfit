# 🌿 AyurFit - AI-Powered Ayurvedic Healthcare Assistant

An intelligent healthcare application that uses Machine Learning to provide personalized Ayurvedic treatment recommendations based on symptoms, powered by a dataset of 1,300 diseases across 18 Ayurvedic categories.

## 🎯 Project Overview

AyurFit combines modern AI (Sentence Transformers) with traditional Ayurvedic medicine to:
- Analyze user symptoms using natural language processing
- Match symptoms to diseases using semantic similarity
- Provide personalized recommendations for herbs, diet, yoga, and lifestyle
- Deliver age and gender-specific treatment suggestions

## 🏗️ Tech Stack

### Frontend (Next.js)
- **Framework:** Next.js 16 with React
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **Deployment:** Vercel

### Backend (Python/FastAPI)
- **Framework:** FastAPI
- **ML Model:** Sentence Transformers (`all-MiniLM-L6-v2`)
- **Data Processing:** Pandas, NumPy
- **Similarity Matching:** Scikit-learn (Cosine Similarity)

## 📁 Project Structure

```
Ayurfit/
├── app/                      # Next.js app directory
│   ├── page.jsx             # Main UI page
│   ├── layout.jsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── header.jsx           # Header component
│   ├── symptom-input.jsx    # Symptom input form
│   ├── clinical-card.jsx    # Results display
│   └── ui/                  # Reusable UI components
├── main.py                  # FastAPI backend server
├── final ayurfit.csv        # Disease dataset (1,300 diseases)
├── final.ipynb              # ML model development notebook
└── package.json             # Node.js dependencies
```

## 🚀 How to Run

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or pnpm

### Step 1: Install Python Dependencies
```bash
cd Ayurfit
pip install fastapi uvicorn pandas sentence-transformers scikit-learn
```

### Step 2: Start the Backend (Python)
```bash
uvicorn main:app --reload
```
The backend will start on **http://127.0.0.1:8000**
- Wait 2-5 minutes for the ML model to load (you'll see "AyurFit is ready!")
- Access API docs at: http://127.0.0.1:8000/docs

### Step 3: Start the Frontend (Next.js)
Open a **new terminal**:
```bash
npm install
npm run dev
```
The frontend will start on **http://localhost:3000**

### Step 4: Use the App
1. Open http://localhost:3000 in your browser
2. Enter symptoms (e.g., "headache and fever")
3. Get personalized Ayurvedic recommendations!

## 🧠 How It Works

### Machine Learning Pipeline

1. **Data Preparation**
   - 1,300 diseases with symptoms, herbs, diet recommendations
   - Combined disease names + symptoms into searchable text

2. **Embedding Generation**
   ```python
   model = SentenceTransformer('all-MiniLM-L6-v2')
   knowledge_embeddings = model.encode(disease_descriptions)
   ```

3. **Symptom Matching**
   - User symptoms → Convert to vector embedding
   - Compare with all 1,300 disease embeddings using cosine similarity
   - Add personalization bonuses for age/gender matches (+5% each)

4. **Result Delivery**
   - Return the highest-matching disease
   - Provide: herbs, formulation, diet, yoga, prevention tips

## 📊 Dataset

**1,300 diseases across 18 Ayurvedic categories:**
- Neurological Disorders
- Digestive System Disorders
- Respiratory Disorders
- Cardiovascular Disorders
- Musculoskeletal Disorders
- Mental Health Disorders
- And 12 more...

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

- **Vercel Deployment:** [https://vercel.com/hinals-projects-4220bf4b/v0-ayur-fit-healthcare-ui](https://vercel.com/hinals-projects-4220bf4b/v0-ayur-fit-healthcare-ui)
- **v0.app Chat:** [https://v0.app/chat/uijdnQWs9jK](https://v0.app/chat/uijdnQWs9jK)
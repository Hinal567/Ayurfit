"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SymptomInput } from "@/components/symptom-input"
import { ClinicalCard } from "@/components/clinical-card"
import {
  TulsiIllustration,
  AshwagandhaIllustration,
  NeemIllustration,
  GingerIllustration,
} from "@/components/herb-illustrations"
import { Leaf } from "lucide-react"

export default function AyurFitPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async (data) => {
    setIsLoading(true)
    setResult(null)
    
    try {
      // 1. Call your FastAPI Backend
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          symptoms: data.symptoms 
        }),
      })

      if (!response.ok) throw new Error("Backend server is not responding.")

      const prediction = await response.json()
      
      // 2. Map Python results to match your v0 UI structure
      // We use .split(',') to turn the CSV text into bullet points for your cards
      const formattedResult = {
        diagnosis: prediction.disease,
        confidence: Math.round(prediction.confidence * 100),
        herbs: prediction.herbs ? prediction.herbs.split(',').map(h => h.trim()) : [],
        yogicPath: prediction.yoga ? prediction.yoga.split(',').map(y => y.trim()) : [],
        dietaryWisdom: prediction.diet ? prediction.diet.split(',').map(d => d.trim()) : [],
      }
      
      setResult(formattedResult)
    } catch (error) {
      console.error("Analysis failed:", error)
      alert("Connection Error: Please ensure your Python server is running (uvicorn main:app --reload)")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-parchment relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <TulsiIllustration className="absolute -top-10 -left-10 w-64 h-64 text-forest" />
        <AshwagandhaIllustration className="absolute top-1/3 -right-16 w-72 h-72 text-forest" />
        <NeemIllustration className="absolute -bottom-16 left-1/4 w-56 h-56 text-forest" />
        <GingerIllustration className="absolute bottom-1/4 -left-12 w-48 h-48 text-forest" />
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-parchment via-transparent to-sage/10 pointer-events-none" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <section className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-forest-light/60 mb-4">
              Ancient Wisdom, Modern Wellness
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-forest mb-6 text-balance leading-tight">
              Your Journey to Balance<br />Begins Here
            </h1>
            <p className="text-forest-light/70 max-w-xl mx-auto leading-relaxed">
              Experience personalized Ayurvedic insights powered by centuries of healing wisdom.
            </p>
          </section>

          <section className="mb-12">
            <SymptomInput onAnalyze={handleAnalyze} isLoading={isLoading} />
          </section>

          {result && (
            <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ClinicalCard result={result} />
            </section>
          )}

          {!result && !isLoading && (
            <section className="mb-12">
              <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage/30 flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-forest/50" />
                </div>
                <h3 className="font-serif text-xl text-forest mb-2">Assessment Ready</h3>
                <p className="text-sm text-forest-light/60 max-w-md mx-auto">
                  Describe your symptoms above and let our Ayurvedic analysis guide you.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
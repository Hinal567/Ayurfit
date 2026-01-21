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

// Mock diagnosis results based on symptoms
const mockDiagnosis = {
  diagnosis: "Vata Imbalance",
  confidence: 87,
  herbs: [
    "Ashwagandha (Withania somnifera) - For stress relief",
    "Tulsi (Holy Basil) - For respiratory health",
    "Brahmi (Bacopa monnieri) - For mental clarity",
    "Shatavari (Asparagus racemosus) - For vitality",
  ],
  yogicPath: [
    "Pranayama - Nadi Shodhana (Alternate Nostril Breathing)",
    "Asana - Gentle Vinyasa Flow in the morning",
    "Meditation - 20 minutes of Trataka practice",
    "Rest - Yoga Nidra before sleep",
  ],
  dietaryWisdom: [
    "Warm, cooked foods with healthy oils",
    "Sweet, sour, and salty tastes to balance",
    "Avoid cold, raw, and dry foods",
    "Ginger tea with meals for digestion",
  ],
}

export default function AyurFitPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async (data) => {
    setIsLoading(true)
    setResult(null)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2500))
    
    // In a real app, this would call an API with the patient data
    console.log("Analyzing:", data)
    
    setResult(mockDiagnosis)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-parchment relative overflow-hidden">
      {/* Background Herb Illustrations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <TulsiIllustration className="absolute -top-10 -left-10 w-64 h-64 text-forest" />
        <AshwagandhaIllustration className="absolute top-1/3 -right-16 w-72 h-72 text-forest" />
        <NeemIllustration className="absolute -bottom-16 left-1/4 w-56 h-56 text-forest" />
        <GingerIllustration className="absolute bottom-1/4 -left-12 w-48 h-48 text-forest" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-parchment via-transparent to-sage/10 pointer-events-none" />

      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Section */}
          <section className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-forest-light/60 mb-4">
              Ancient Wisdom, Modern Wellness
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-forest mb-6 text-balance leading-tight">
              Your Journey to Balance<br />Begins Here
            </h1>
            <p className="text-forest-light/70 max-w-xl mx-auto leading-relaxed">
              Experience personalized Ayurvedic insights powered by centuries of healing wisdom.
              Discover the harmony between mind, body, and spirit.
            </p>
          </section>

          {/* Main Symptom Input Card - All-in-One */}
          <section className="mb-12">
            <SymptomInput onAnalyze={handleAnalyze} isLoading={isLoading} />
          </section>

          {/* Results */}
          {result && (
            <section className="mb-12">
              <ClinicalCard result={result} />
            </section>
          )}

          {/* Empty State - Only shown when no results */}
          {!result && !isLoading && (
            <section className="mb-12">
              <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage/30 flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-forest/50" />
                </div>
                <h3 className="font-serif text-xl text-forest mb-2">
                  Your Personalized Assessment Awaits
                </h3>
                <p className="text-sm text-forest-light/60 max-w-md mx-auto">
                  Describe your symptoms above and let our Ayurvedic analysis guide you toward balance through time-tested natural remedies.
                </p>
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 bg-parchment/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-forest" />
              </div>
              <span className="font-serif text-base font-medium text-forest">AyurFit</span>
            </div>
            <p className="text-[11px] text-forest-light/50 text-center">
              Rooted in 5,000 years of tradition. Designed for modern life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

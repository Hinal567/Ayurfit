"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Loader2 } from "lucide-react"

export function SymptomInput({ onAnalyze, isLoading }) {
  const [symptoms, setSymptoms] = useState("")
  const [age, setAge] = useState(35)
  const [gender, setGender] = useState("male")
  const [severity, setSeverity] = useState(50)

  const handleSubmit = () => {
    if (symptoms.trim()) {
      onAnalyze({ symptoms, age, gender, severity })
    }
  }

  return (
    <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-forest/20 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-forest/20 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-forest/20 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-forest/20 rounded-br-lg" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-forest-light/60 mb-2">
            Describe Your Condition
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-forest">
            What symptoms are you experiencing?
          </h2>
        </div>

        {/* Symptom Textarea */}
        <div className="relative mb-8">
          <Textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Share your symptoms in detail... For example: persistent fatigue, difficulty sleeping, mild headaches in the morning, feeling of heaviness after meals..."
            className="min-h-[140px] bg-parchment/50 border-forest/10 rounded-xl text-forest placeholder:text-forest-light/40 text-sm leading-relaxed resize-none focus:border-forest/30 focus:ring-forest/20 transition-all duration-300"
          />
          
          {/* Character count */}
          <div className="absolute bottom-3 right-3 text-[10px] text-forest-light/40">
            {symptoms.length} characters
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-forest/10" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-forest-light/50">Patient Profile</span>
          <div className="flex-1 h-px bg-forest/10" />
        </div>

        {/* Patient Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Age Input */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-forest/80 uppercase tracking-wider">
              Age
            </label>
            <div className="relative">
              <Input
                type="number"
                min={1}
                max={120}
                value={age}
                onChange={(e) => setAge(Math.max(1, Math.min(120, parseInt(e.target.value) || 1)))}
                className="bg-parchment/50 border-forest/10 rounded-lg text-forest text-center pr-12 focus:border-forest/30 focus:ring-forest/20 transition-all h-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-forest-light/50">
                years
              </span>
            </div>
          </div>

          {/* Gender Dropdown */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-forest/80 uppercase tracking-wider">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full h-12 px-4 bg-parchment/50 border border-forest/10 rounded-lg text-forest text-sm focus:border-forest/30 focus:ring-2 focus:ring-forest/20 focus:outline-none transition-all cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D5A27' strokeWidth='1.5'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px'
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both / Other</option>
            </select>
          </div>

          {/* Severity Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-forest/80 uppercase tracking-wider">
                Severity
              </label>
              <span className="text-xs text-forest-light/60">
                {severity < 33 ? 'Mild' : severity < 66 ? 'Moderate' : 'Severe'}
              </span>
            </div>
            <div className="pt-3">
              <Slider
                value={[severity]}
                onValueChange={(value) => setSeverity(value[0])}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-forest [&_[role=slider]]:border-forest [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_.range]:bg-forest"
              />
              <div className="flex justify-between mt-2 text-[10px] text-forest-light/40">
                <span>Mild</span>
                <span>Severe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={!symptoms.trim() || isLoading}
            className="group relative px-10 py-6 h-auto bg-forest hover:bg-forest-light text-parchment font-medium text-sm tracking-wide rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative flex items-center gap-3">
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing Symptoms...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" strokeLinecap="round" />
                  </svg>
                  <span>Botanical Scan</span>
                </>
              )}
            </span>
          </Button>
        </div>

        {/* Hint text */}
        <p className="text-center text-[11px] text-forest-light/50 mt-5">
          Be as detailed as possible for a more accurate assessment
        </p>
      </div>
    </div>
  )
}

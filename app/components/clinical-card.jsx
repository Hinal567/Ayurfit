  "use client"

  import { ConfidenceGauge } from "./confidence-gauge"

  export function ClinicalCard({ result }) {
    return (
      <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
        {/* Prescription Header */}
        <div className="backdrop-blur-xl bg-card/70 border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-sage to-forest" />
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-forest-light/60 mb-1">Ayurvedic Consultation</p>
              <h3 className="font-serif text-2xl font-semibold text-forest">Clinical Assessment</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-forest-light/60">Date</p>
              <p className="text-sm text-forest font-medium">{new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</p>
            </div>
          </div>
          
          {/* Prescription line art */}
          {/* <div className="absolute -right-4 -bottom-4 opacity-5">
            <svg width="150" height="150" viewBox="0 0 100 100" className="text-forest">
              <text x="10" y="60" fontSize="60" fill="currentColor" fontFamily="serif">Rx</text>
            </svg>
          </div> */}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Diagnosis Card */}
          <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-forest-light/60 mb-1">Primary Diagnosis</p>
                <h4 className="font-serif text-xl font-semibold text-forest">{result.diagnosis}</h4>
              </div>
              <ConfidenceGauge value={result.confidence} size={80} />
            </div>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-forest-light/70 leading-relaxed">
                Based on your symptoms and constitution, our analysis indicates a strong correlation with this condition.
              </p>
            </div>
          </div>

          {/* Recommended Herbs Card */}
          <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-forest-light/60">Recommended</p>
                <h4 className="font-serif text-lg font-medium text-forest">Medicinal Herbs</h4>
              </div>
            </div>
            <ul className="space-y-2">
              {result.herbs.map((herb, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-forest-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest/60" />
                  {herb}
                </li>
              ))}
            </ul>
          </div>

          {/* Yogic Path Card */}
          <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-forest-light/60">Practice</p>
                <h4 className="font-serif text-lg font-medium text-forest">Yogic Path</h4>
              </div>
            </div>
            <ul className="space-y-2">
              {result.yogicPath.map((practice, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-forest-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest/60" />
                  {practice}
                </li>
              ))}
            </ul>
          </div>

          {/* Dietary Wisdom Card */}
          <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-forest-light/60">Nutrition</p>
                <h4 className="font-serif text-lg font-medium text-forest">Dietary Wisdom</h4>
              </div>
            </div>
            <ul className="space-y-2">
              {result.dietaryWisdom.map((food, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-forest-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest/60" />
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="backdrop-blur-xl bg-sage/20 border border-border/50 rounded-xl p-4 text-center">
          <p className="text-xs text-forest-light/70 italic">
            This assessment is based on traditional Ayurvedic principles. Please consult with a qualified practitioner for personalized guidance.
          </p>
        </div>
      </div>
    )
  }

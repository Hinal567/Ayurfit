"use client"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-parchment/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-parchment" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-3 0-6 2-6 6 0 3 2 5 4 6v6h4v-6c2-1 4-3 4-6 0-4-3-6-6-6z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3v9M9 8c1-1 2-1 3 0s2 1 3 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold text-forest tracking-tight">AyurFit</h1>
            <p className="text-[9px] uppercase tracking-[0.25em] text-forest-light/60">Holistic Wellness</p>
          </div>
        </div>

        {/* Peace of Mind Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-sage/30 px-4 py-2 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest" />
            </span>
            <span className="text-xs font-medium text-forest">Peace of Mind</span>
          </div>
        </div>
      </div>
    </header>
  )
}

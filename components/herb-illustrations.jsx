"use client"

export function TulsiIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15" stroke="currentColor" strokeWidth="1">
        {/* Stem */}
        <path d="M100 180 Q100 140 100 100" />
        <path d="M100 100 Q100 60 100 40" />
        
        {/* Leaves - left side */}
        <path d="M100 160 Q70 155 60 140 Q55 125 70 120 Q85 115 100 130" />
        <path d="M100 130 Q65 120 55 100 Q50 80 70 78 Q90 75 100 95" />
        <path d="M100 95 Q75 85 68 65 Q65 45 85 48 Q100 50 100 70" />
        
        {/* Leaves - right side */}
        <path d="M100 160 Q130 155 140 140 Q145 125 130 120 Q115 115 100 130" />
        <path d="M100 130 Q135 120 145 100 Q150 80 130 78 Q110 75 100 95" />
        <path d="M100 95 Q125 85 132 65 Q135 45 115 48 Q100 50 100 70" />
        
        {/* Top leaves */}
        <path d="M100 50 Q85 35 90 20 Q95 10 100 15 Q105 10 110 20 Q115 35 100 50" />
      </g>
    </svg>
  )
}

export function AshwagandhaIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.12" stroke="currentColor" strokeWidth="1">
        {/* Main stem */}
        <path d="M100 190 Q100 150 100 110" />
        <path d="M100 110 Q95 80 90 50" />
        <path d="M100 110 Q105 80 110 50" />
        
        {/* Branch left */}
        <path d="M100 140 Q70 135 50 150" />
        <path d="M50 150 Q35 140 30 120" />
        <path d="M50 150 Q45 165 55 175" />
        
        {/* Branch right */}
        <path d="M100 140 Q130 135 150 150" />
        <path d="M150 150 Q165 140 170 120" />
        <path d="M150 150 Q155 165 145 175" />
        
        {/* Oval leaves */}
        <ellipse cx="30" cy="115" rx="12" ry="18" />
        <ellipse cx="55" cy="180" rx="10" ry="15" />
        <ellipse cx="170" cy="115" rx="12" ry="18" />
        <ellipse cx="145" cy="180" rx="10" ry="15" />
        
        {/* Top flower clusters */}
        <circle cx="85" cy="45" r="8" />
        <circle cx="90" cy="35" r="6" />
        <circle cx="115" cy="45" r="8" />
        <circle cx="110" cy="35" r="6" />
        
        {/* Berries */}
        <circle cx="78" cy="55" r="4" />
        <circle cx="122" cy="55" r="4" />
      </g>
    </svg>
  )
}

export function NeemIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1" stroke="currentColor" strokeWidth="1">
        {/* Main branch */}
        <path d="M20 180 Q60 140 100 100" />
        <path d="M100 100 Q140 60 180 20" />
        
        {/* Compound leaves - pairs along the branch */}
        <path d="M40 160 Q30 150 25 135 Q30 125 40 130 Q50 135 45 150 Q42 158 40 160" />
        <path d="M50 155 Q60 145 70 135 Q75 125 65 122 Q55 120 50 135 Q48 148 50 155" />
        
        <path d="M60 140 Q50 130 48 115 Q52 105 62 110 Q72 115 68 130 Q65 138 60 140" />
        <path d="M75 130 Q85 120 95 110 Q100 100 90 98 Q80 96 75 110 Q73 123 75 130" />
        
        <path d="M90 115 Q80 105 78 90 Q82 80 92 85 Q102 90 98 105 Q95 112 90 115" />
        <path d="M105 100 Q115 90 125 80 Q130 70 120 68 Q110 66 105 80 Q103 93 105 100" />
        
        <path d="M120 85 Q110 75 108 60 Q112 50 122 55 Q132 60 128 75 Q125 82 120 85" />
        <path d="M135 70 Q145 60 155 50 Q160 40 150 38 Q140 36 135 50 Q133 63 135 70" />
        
        <path d="M150 55 Q140 45 138 30 Q142 20 152 25 Q162 30 158 45 Q155 52 150 55" />
        <path d="M165 40 Q175 30 180 25 Q182 20 175 18 Q168 16 165 25 Q163 35 165 40" />
      </g>
    </svg>
  )
}

export function GingerIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1" stroke="currentColor" strokeWidth="1">
        {/* Ginger root - organic blob shapes */}
        <path d="M60 120 Q40 110 35 90 Q35 70 55 65 Q75 60 85 75 Q95 65 115 60 Q140 55 150 75 Q160 95 145 110 Q155 125 150 145 Q140 165 115 160 Q100 170 80 165 Q55 160 50 140 Q45 125 60 120" />
        
        {/* Root segments */}
        <path d="M55 85 Q70 80 85 85" />
        <path d="M95 75 Q110 70 125 75" />
        <path d="M130 95 Q145 100 145 115" />
        <path d="M115 145 Q100 150 85 145" />
        <path d="M65 130 Q55 125 55 110" />
        
        {/* Shoots */}
        <path d="M70 65 Q65 50 70 35 Q75 25 80 30 Q85 35 80 50 Q78 60 75 65" />
        <path d="M120 55 Q125 40 130 25 Q135 15 140 22 Q145 30 138 45 Q132 55 125 58" />
        
        {/* Leaves from shoots */}
        <path d="M65 40 Q55 35 50 25" />
        <path d="M80 35 Q90 30 95 20" />
        <path d="M125 30 Q115 25 112 15" />
        <path d="M140 28 Q150 22 158 15" />
      </g>
    </svg>
  )
}

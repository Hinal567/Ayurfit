"use client"

import * as React from "react"

const Slider = React.forwardRef(({ className = "", value = [50], onValueChange, min = 0, max = 100, step = 1, ...props }, ref) => {
  const handleChange = (e) => {
    if (onValueChange) {
      onValueChange([parseInt(e.target.value)])
    }
  }

  return (
    <div className="relative flex w-full touch-none select-none items-center">
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className={`w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary ${className}`}
        {...props}
      />
    </div>
  )
})
Slider.displayName = "Slider"

export { Slider }

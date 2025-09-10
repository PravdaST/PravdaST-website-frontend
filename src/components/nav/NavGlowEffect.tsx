'use client'

import { MotionDiv } from '@/hooks/useSharedFramerMotion'

interface NavGlowEffectProps {
  intensity?: string
  blur?: string
  className?: string
}

export function NavGlowEffect({ 
  intensity = "bg-[#ECB629]/10", 
  blur = "blur-sm",
  className = ""
}: NavGlowEffectProps) {
  return (
    <MotionDiv
      className={`absolute inset-0 ${intensity} rounded-lg ${blur} opacity-0 group-hover:opacity-100 transition-all duration-300 performance-animated-element ${className}`}
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
    />
  )
}
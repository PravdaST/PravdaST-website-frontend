'use client'

import { MotionDiv } from '@/hooks/useSharedFramerMotion'

interface NavUnderlineProps {
  isActive?: boolean
  gradient?: string
  className?: string
}

export function NavUnderline({ 
  isActive = false, 
  gradient = "from-[#ECB629] to-[#ECB629]/50",
  className = ""
}: NavUnderlineProps) {
  return (
    <MotionDiv
      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} origin-left transition-transform duration-300 performance-animated-element ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      } ${className}`}
    />
  )
}
'use client'

import { MotionDiv } from '@/hooks/useSharedFramerMotion'

interface NavActiveIndicatorProps {
  isActive: boolean
  position?: 'top' | 'bottom'
  className?: string
}

export function NavActiveIndicator({ 
  isActive, 
  position = 'top',
  className = ""
}: NavActiveIndicatorProps) {
  if (!isActive) return null

  const positionStyles = {
    top: "-top-1 left-1/2 transform -translate-x-1/2",
    bottom: "-bottom-1 left-1/2 transform -translate-x-1/2"
  }

  return (
    <MotionDiv
      className={`absolute ${positionStyles[position]} w-1 h-1 bg-[#ECB629] rounded-full performance-animated-element ${className}`}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  )
}
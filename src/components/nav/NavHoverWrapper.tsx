'use client'

import { MotionDiv } from '@/hooks/useSharedFramerMotion'
import { ReactNode } from 'react'

interface NavHoverWrapperProps {
  children: ReactNode
  scale?: number
  tapScale?: number
  duration?: number
  className?: string
}

export function NavHoverWrapper({ 
  children, 
  scale = 1.05, 
  tapScale = 0.95, 
  duration = 0.2,
  className = ""
}: NavHoverWrapperProps) {
  return (
    <MotionDiv
      whileHover={{ scale }}
      whileTap={{ scale: tapScale }}
      transition={{ duration }}
      className={`relative performance-animated-element ${className}`}
    >
      {children}
    </MotionDiv>
  )
}
'use client'

import { MotionDiv } from '@/hooks/useSharedFramerMotion'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface NavButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'mobile'
  className?: string
  fullWidth?: boolean
}

export function NavButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = "",
  fullWidth = false
}: NavButtonProps) {
  const baseStyles = "font-semibold transition-all duration-300 relative overflow-hidden group"
  
  const variantStyles = {
    primary: "bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-6 py-3 rounded-lg shadow-lg hover:shadow-[#ECB629]/40",
    mobile: "bg-[#ECB629] text-black hover:bg-[#ECB629]/90 py-3 rounded-lg"
  }

  const widthStyle = fullWidth ? "w-full" : ""

  return (
    <MotionDiv
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative performance-animated-element"
    >
      <Button
        className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
        onClick={onClick}
      >
        {/* Button Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {variant === 'primary' && (
            <MotionDiv
              className="w-1 h-1 bg-black rounded-full performance-animated-element"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </span>
      </Button>
    </MotionDiv>
  )
}
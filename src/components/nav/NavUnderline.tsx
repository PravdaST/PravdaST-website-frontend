'use client'

import { motion } from 'framer-motion'

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
    <motion.div
      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} origin-left transition-transform duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      } ${className}`}
    />
  )
}
'use client'

import { motion } from 'framer-motion'

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
    <motion.div
      className={`absolute inset-0 ${intensity} rounded-lg ${blur} opacity-0 group-hover:opacity-100 transition-all duration-300 ${className}`}
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
    />
  )
}
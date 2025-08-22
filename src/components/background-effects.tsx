'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Array<{ left: number; top: number }>>([])
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check for mobile devices and reduced motion preference
    const checkMobile = () => window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const checkReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    setIsMobile(checkMobile())
    setReducedMotion(checkReducedMotion())

    // Generate fewer particles for mobile
    const particleCount = checkMobile() ? 4 : 8 // Reduced from 12
    const newParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])
  // Skip all animations for reduced motion users or on very low-end devices
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(236, 182, 40, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Primary Yellow Orb - Optimized for mobile */}
      <motion.div
        className={`absolute rounded-full opacity-20 ${
          isMobile ? 'w-48 h-48 blur-xl' : 'w-96 h-96 blur-3xl'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(236, 182, 40, 0.4) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 100%)',
          top: '10%',
          left: '10%',
        }}
        animate={isMobile ? {
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        } : {
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: isMobile ? 20 : 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary Orange Orb - Mobile optimized */}
      {!isMobile && (
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-2xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, rgba(236, 182, 40, 0.15) 60%, transparent 100%)',
            bottom: '20%',
            right: '15%',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Simplified Blue Orb - Desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.1) 70%, transparent 100%)',
            top: '60%',
            left: '70%',
          }}
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Static ambient glow for mobile, animated for desktop */}
      <motion.div
        className={`absolute rounded-full ${
          isMobile ? 'w-40 h-40 blur-xl opacity-6' : 'w-80 h-80 blur-3xl opacity-8'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(236, 182, 40, 0.15) 0%, transparent 70%)',
          bottom: '5%',
          left: '5%',
        }}
        animate={isMobile ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={isMobile ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Optimized Floating Particles - Fewer for mobile */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#ECB628]/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={isMobile ? {
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
          } : {
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: isMobile ? 12 : 8 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.8, // Longer delays for smoother performance
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Simplified gradient overlay for better performance */}
      <div 
        className={`absolute inset-0 ${isMobile ? 'opacity-20' : 'opacity-30'}`}
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(13, 13, 15, 0.8) 100%),
            radial-gradient(circle at 20% 80%, rgba(236, 182, 40, 0.03) 0%, transparent 50%)
          `
        }}
      />
    </div>
  )
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-[#ECB628]/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
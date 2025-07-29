'use client'

import { motion } from 'framer-motion'

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Primary Yellow Orb - Large */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236, 182, 40, 0.4) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 100%)',
          top: '10%',
          left: '10%',
        }}
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

      {/* Secondary Orange Orb - Medium */}
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

      {/* Tertiary Blue Orb - Small */}
      <motion.div
        className="absolute w-48 h-48 rounded-full blur-xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.1) 70%, transparent 100%)',
          top: '60%',
          left: '70%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient Yellow Glow - Bottom Left */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(236, 182, 40, 0.15) 0%, transparent 70%)',
          bottom: '5%',
          left: '5%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Purple Accent - Top Right */}
      <motion.div
        className="absolute w-56 h-56 rounded-full blur-2xl opacity-6"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(196, 146, 254, 0.08) 60%, transparent 100%)',
          top: '15%',
          right: '20%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles Effect */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#ECB628]/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(13, 13, 15, 0.8) 100%),
            radial-gradient(circle at 20% 80%, rgba(236, 182, 40, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)
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
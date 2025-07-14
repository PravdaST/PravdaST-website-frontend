'use client'

import { motion } from "framer-motion"

interface AnimatedHeroBackgroundProps {
  variant?: 'default' | 'about' | 'blog' | 'contact' | 'faq' | 'case-studies'
  opacity?: number
}

export const AnimatedHeroBackground = ({ 
  variant = 'default', 
  opacity = 0.15 
}: AnimatedHeroBackgroundProps) => {
  const renderVariantElements = () => {
    switch (variant) {
      case 'about':
        return (
          <>
            {/* Team Connection Lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-[#ECB629] to-transparent"
                style={{
                  left: `${20 + i * 15}%`,
                  height: "60%",
                  top: "20%",
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        )
      
      case 'blog':
        return (
          <>
            {/* Floating Knowledge Icons */}
            {[
              { left: '15%', top: '20%', delay: 0 },
              { left: '75%', top: '35%', delay: 0.5 },
              { left: '35%', top: '65%', delay: 1 },
              { left: '85%', top: '75%', delay: 1.5 },
              { left: '25%', top: '85%', delay: 2 },
              { left: '65%', top: '15%', delay: 2.5 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#ECB629]/40 rounded-full"
                style={{
                  left: item.left,
                  top: item.top,
                }}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              />
            ))}
          </>
        )
      
      case 'contact':
        return (
          <>
            {/* Contact Communication Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ECB629]/40 rounded-full"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 2) * 50}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </>
        )
      
      case 'faq':
        return (
          <>
            {/* FAQ Question Marks */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ECB629]/30 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}
          </>
        )
      
      case 'case-studies':
        return (
          <>
            {/* Success Growth Lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                style={{
                  left: `${i * 20}%`,
                  top: `${80 - i * 15}%`,
                  width: `${30 + i * 10}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </>
        )
      
      default:
        return (
          <>
            {/* Default Tech Lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: `${200 + i * 50}px`,
                  left: i % 2 === 0 ? "10%" : "auto",
                  right: i % 2 === 1 ? "10%" : "auto",
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </>
        )
    }
  }

  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: variant === 'about' ? "40px 40px" : "50px 50px",
          }}
        />
        
        {/* Variant-specific elements */}
        {renderVariantElements()}
      </div>
    </div>
  )
}
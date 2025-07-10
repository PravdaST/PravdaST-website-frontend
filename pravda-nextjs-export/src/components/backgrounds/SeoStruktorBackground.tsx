
'use client'

import { motion } from 'framer-motion'

export function SeoStruktorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      </div>
      
      {/* Animated search icons */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              transform: `rotate(${i * 45}deg)`
            }}
          >
            <div className="w-12 h-12 border-2 border-blue-400 rounded-full relative">
              <div className="w-3 h-3 bg-blue-400 rounded-full absolute -right-1 -bottom-1 transform rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* SEO keywords floating */}
      <div className="absolute inset-0 pointer-events-none">
        {['SEO', 'Keywords', 'Ranking', 'Traffic', 'Analytics', 'Optimization'].map((word, i) => (
          <motion.div
            key={word}
            className="absolute text-blue-400/30 font-bold text-lg select-none"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              y: [-20, -100, -20]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3
            }}
            style={{
              left: `${10 + (i * 15)}%`,
              top: '80%'
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400 rounded-lg animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

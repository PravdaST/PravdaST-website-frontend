
'use client';

import { motion } from 'framer-motion';

export default function ClientomatBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Client Journey Flow */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <motion.path
            d="M100,400 Q300,200 500,400 T900,400 Q1000,300 1100,400"
            stroke="var(--pravdast-yellow)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="10,5"
            animate={{
              strokeDashoffset: [0, -50, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Customer Icons */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 bg-[var(--pravdast-yellow)] rounded-full opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs">👤</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conversion Funnel */}
      <div className="absolute right-10 top-1/4 opacity-10">
        <motion.div
          className="space-y-4"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          {[100, 80, 60, 40, 20].map((width, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[var(--pravdast-yellow)] to-blue-500 h-8 rounded"
              style={{ width: `${width}px` }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
'use client'

import { motion } from 'framer-motion'

export function ClientomatBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
      </div>
      
      {/* Animated client flow icons */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1
            }}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (i * 12)}%`,
            }}
          >
            <div className="w-8 h-8 bg-green-400 rounded-full relative">
              <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping" />
              <motion.div
                className="absolute top-1/2 left-1/2 w-1 h-8 bg-green-400 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Client journey keywords */}
      <div className="absolute inset-0 pointer-events-none">
        {['Leads', 'Conversion', 'Automation', 'Growth', 'CRM', 'Analytics'].map((word, i) => (
          <motion.div
            key={word}
            className="absolute text-green-400/30 font-bold text-lg select-none"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [-20, -120, -20]
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              delay: i * 3
            }}
            style={{
              left: `${5 + (i * 16)}%`,
              top: '85%'
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>
      
      {/* Connection lines animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(4)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 20}%`}
              y1="30%"
              x2={`${30 + i * 20}%`}
              y2="60%"
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.5
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-20 w-32 h-32 border border-green-400 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-blue-400 rounded-lg animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-green-400 transform rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
      </div>
    </div>
  )
}

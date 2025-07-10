
"use client"

import React from 'react'
import { motion } from 'framer-motion'

const ClickstarterBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] opacity-20" />
      
      {/* Floating clicks pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FF6B6B] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Cursor trail effect */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#4ECDC4] rounded-full"
          style={{ left: '20%', top: '30%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border-2 border-[#FF6B6B] rounded-full"
          style={{ left: '70%', top: '20%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Click wave effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-[#ECB628] rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ClickstarterBackground
'use client';

export function ClickstarterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800"></div>
      
      {/* Animated click ripples */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-purple-400 animate-ping"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      {/* Cursor trail effect */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Cursor path */}
          <path
            d="M100,400 Q300,200 500,350 T900,300 L1100,450"
            stroke="url(#cursorGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          
          {/* Click points */}
          {[
            { x: 200, y: 300 },
            { x: 450, y: 380 },
            { x: 700, y: 290 },
            { x: 950, y: 400 }
          ].map((point, i) => (
            <g key={i}>
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="#8b5cf6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="16"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                className="animate-ping"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
            </g>
          ))}
        </svg>
      </div>
      
      {/* Floating UI elements */}
      <div className="absolute top-16 right-32 opacity-40 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-20 h-12 bg-purple-600/30 rounded-lg border border-purple-400 flex items-center justify-center">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-40 left-32 opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
        <div className="w-16 h-16 bg-purple-600/20 rounded-full border-2 border-purple-400 flex items-center justify-center">
          <div className="w-2 h-8 bg-purple-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Binary code pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1 text-purple-400 text-xs font-mono transform rotate-45 scale-150">
          {Array.from({ length: 400 }).map((_, i) => (
            <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
    </div>
  );
}


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

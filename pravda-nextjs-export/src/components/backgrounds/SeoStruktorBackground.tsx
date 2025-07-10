
'use client';

import { motion } from 'framer-motion';

export default function SeoStruktorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SEO Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full transform rotate-6">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[var(--pravdast-yellow)] rounded-sm"
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Keywords */}
      <div className="absolute inset-0">
        {['SEO', 'RANKINGS', 'TRAFFIC', 'KEYWORDS', 'OPTIMIZATION'].map((word, i) => (
          <motion.div
            key={word}
            className="absolute text-6xl font-bold text-white opacity-5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Search Result Boxes */}
      <div className="absolute right-10 top-1/4 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="mb-4 p-4 bg-white rounded-lg shadow-lg"
            style={{ width: '300px' }}
            animate={{
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="h-4 bg-blue-500 rounded mb-2"></div>
            <div className="h-2 bg-gray-300 rounded mb-1"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


'use client';

import { motion } from 'framer-motion';

export default function TrendlabBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Analytics Charts */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Rising trend line */}
          <motion.path
            d="M50,600 L200,500 L350,400 L500,300 L650,200 L800,150 L950,100 L1100,50"
            stroke="var(--pravdast-yellow)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Data points */}
          {[[200,500], [350,400], [500,300], [650,200], [800,150]].map((point, i) => (
            <motion.circle
              key={i}
              cx={point[0]}
              cy={point[1]}
              r="8"
              fill="var(--pravdast-yellow)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Data Metrics */}
      <div className="absolute inset-0">
        {[
          { label: '+247%', x: '20%', y: '30%' },
          { label: '↗ 156K', x: '70%', y: '20%' },
          { label: 'ROI: 340%', x: '60%', y: '70%' },
          { label: '🎯 92%', x: '15%', y: '80%' },
        ].map((metric, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl font-bold text-white opacity-20"
            style={{ left: metric.x, top: metric.y }}
            animate={{
              y: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {metric.label}
          </motion.div>
        ))}
      </div>

      {/* Dashboard Elements */}
      <div className="absolute left-10 bottom-20 opacity-10">
        <motion.div
          className="bg-white rounded-lg p-4 shadow-xl"
          style={{ width: '200px' }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <div className="space-y-2">
            <div className="h-3 bg-[var(--pravdast-yellow)] rounded w-full"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded w-1/2"></div>
            <div className="flex space-x-1 mt-3">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 bg-blue-500 rounded-t"
                  style={{ height: `${20 + i * 5}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

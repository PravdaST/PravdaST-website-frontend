
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
'use client';

export function TrendlabBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-orange-400 to-transparent rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Trend lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Trend line 1 */}
          <path
            d="M50,600 Q300,400 600,300 T1150,200"
            stroke="url(#trendGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          
          {/* Trend line 2 */}
          <path
            d="M50,700 Q400,500 800,400 T1150,350"
            stroke="url(#trendGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Data points */}
          {[
            { x: 200, y: 500 },
            { x: 400, y: 350 },
            { x: 600, y: 300 },
            { x: 800, y: 250 },
            { x: 1000, y: 200 }
          ].map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#f97316"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>
      
      {/* Floating chart elements */}
      <div className="absolute top-20 right-20 opacity-30 animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="w-16 h-16 border-2 border-orange-400 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-400 rounded"></div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-40 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
        <div className="w-12 h-12 border-2 border-orange-300 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
    </div>
  );
}

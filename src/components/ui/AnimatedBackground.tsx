
'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'minimal';
  className?: string;
}

const AnimatedBackground = ({ variant = 'hero', className = '' }: AnimatedBackgroundProps) => {
  const variants = {
    hero: {
      gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-100",
      overlay: "bg-white/80",
      orbs: [
        {
          position: "-top-40 -right-40",
          size: "w-96 h-96",
          color: "bg-yellow-400/20",
          animation: { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] },
          duration: 4,
          delay: 0
        },
        {
          position: "-bottom-40 -left-40", 
          size: "w-96 h-96",
          color: "bg-green-400/20",
          animation: { scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] },
          duration: 4,
          delay: 2
        },
        {
          position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          size: "w-64 h-64", 
          color: "bg-purple-400/15",
          animation: { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] },
          duration: 5,
          delay: 1
        }
      ]
    },
    section: {
      gradient: "bg-gradient-to-r from-gray-50 to-white",
      overlay: "bg-white/70",
      orbs: [
        {
          position: "-top-20 -right-20",
          size: "w-48 h-48",
          color: "bg-yellow-400/15",
          animation: { scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] },
          duration: 6,
          delay: 0
        }
      ]
    },
    minimal: {
      gradient: "bg-gray-50",
      overlay: "bg-white/90",
      orbs: []
    }
  };

  const config = variants[variant];

  return (
    <>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${config.gradient}`}>
        <div className={`absolute inset-0 ${config.overlay}`} />
      </div>

      {/* Animated Orbs */}
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {config.orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full blur-3xl`}
            animate={orb.animation}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;

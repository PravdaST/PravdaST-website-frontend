
'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'services' | 'minimal';
  children?: React.ReactNode;
}

export default function AnimatedBackground({ variant = 'default', children }: AnimatedBackgroundProps) {
  const patterns = {
    default: (
      <>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--pravdast-yellow)] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-green-500 opacity-5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </>
    ),
    services: (
      <>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-110">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </>
    ),
    minimal: (
      <>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[var(--pravdast-yellow)] to-transparent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-transparent opacity-5 rounded-full blur-3xl"></div>
      </>
    )
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {patterns[variant]}
      {children}
    </div>
  );
}

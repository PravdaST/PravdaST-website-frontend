'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface GooeyNavProps {
  items: NavItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  className = '',
  orientation = 'horizontal'
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={`gooey-nav ${orientation} ${className}`}>
      <div className="relative">
        {/* Gooey background blob */}
        <motion.div
          className="absolute inset-0 glassmorphism rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(236, 182, 40, 0.1), rgba(236, 182, 40, 0.05))',
            filter: 'blur(20px) contrast(20)',
          }}
          animate={{
            scaleX: hoveredIndex !== null ? 1.2 : 1,
            scaleY: hoveredIndex !== null ? 1.1 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Navigation items */}
        <div className={`relative z-10 flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} gap-2 p-2`}>
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              className="relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Individual item background */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="gooey-background"
                    className="absolute inset-0 bg-[#ECB629]/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                    style={{
                      filter: 'blur(1px)',
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation link */}
              <Link href={item.href}>
                <motion.div
                  className="relative z-10 px-4 py-3 flex items-center gap-2 text-white font-medium rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    color: hoveredIndex === index ? '#ECB629' : '#ffffff',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon && (
                    <motion.span
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.span>
                  )}
                  <span className="text-sm font-semibold">{item.label}</span>
                </motion.div>
              </Link>

              {/* Gooey connection effect */}
              {hoveredIndex === index && index < items.length - 1 && (
                <motion.div
                  className="absolute top-1/2 -right-1 w-2 h-2 bg-[#ECB629]/30 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    filter: 'blur(2px)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GooeyNav;
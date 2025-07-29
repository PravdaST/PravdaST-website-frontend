'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TargetCursorProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  className?: string;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  size = 32,
  color = '#ECB628',
  strokeWidth = 2,
  spinDuration = 2,
  hideDefaultCursor = true,
  className = ''
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over target elements
      const target = e.target as HTMLElement;
      const isTargetElement = target.closest('.cursor-target, button, a, [role="button"]');
      
      if (isTargetElement) {
        setIsHovering(true);
        setTargetElement(isTargetElement as HTMLElement);
      } else {
        setIsHovering(false);
        setTargetElement(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setTargetElement(null);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor globally if enabled
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
      document.body.style.setProperty('cursor', 'none', 'important');
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (hideDefaultCursor) {
        document.body.style.cursor = '';
        document.body.style.removeProperty('cursor');
      }
    };
  }, [hideDefaultCursor]);

  const cursorSize = isHovering ? size * 1.5 : size;
  const innerSize = isHovering ? size * 0.3 : size * 0.2;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className={`fixed pointer-events-none z-[9999] ${className}`}
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: isVisible ? 1 : 0,
            rotate: 360
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { type: 'spring', stiffness: 400, damping: 25 },
            opacity: { duration: 0.2 },
            rotate: { 
              duration: spinDuration, 
              repeat: Infinity, 
              ease: 'linear' 
            }
          }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border"
            style={{
              width: cursorSize,
              height: cursorSize,
              borderColor: color,
              borderWidth: strokeWidth,
              borderStyle: 'solid',
            }}
            animate={{
              width: cursorSize,
              height: cursorSize,
              scale: isHovering ? 1.2 : 1,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 20 
            }}
          />

          {/* Inner Dot */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: innerSize,
              height: innerSize,
              backgroundColor: color,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              width: innerSize,
              height: innerSize,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25 
            }}
          />

          {/* Crosshairs */}
          <motion.div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Vertical Line */}
            <motion.div
              className="absolute"
              style={{
                width: strokeWidth,
                height: cursorSize * 0.6,
                backgroundColor: color,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                height: cursorSize * 0.6,
                opacity: isHovering ? 0.8 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20 
              }}
            />
            
            {/* Horizontal Line */}
            <motion.div
              className="absolute"
              style={{
                width: cursorSize * 0.6,
                height: strokeWidth,
                backgroundColor: color,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                width: cursorSize * 0.6,
                opacity: isHovering ? 0.8 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20 
              }}
            />
          </motion.div>

          {/* Hover Pulse Effect */}
          {isHovering && (
            <motion.div
              className="absolute inset-0 rounded-full border"
              style={{
                width: cursorSize * 1.8,
                height: cursorSize * 1.8,
                borderColor: color,
                borderWidth: 1,
                borderStyle: 'solid',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ 
                scale: [0.5, 1.2, 0.5], 
                opacity: [0.8, 0.2, 0.8] 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TargetCursor;
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number; // 0.1 - 1.0
  range?: number; // pixels
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({ 
  children, 
  strength = 0.3, 
  range = 100,
  className = ''
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = magnetRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        setIsHovering(true);
        const factor = (range - distance) / range;
        const moveX = deltaX * strength * factor;
        const moveY = deltaY * strength * factor;
        
        setPosition({ x: moveX, y: moveY });
      } else {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setPosition({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, range]);

  return (
    <div
      ref={magnetRef}
      className={`magnetic-element ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovering ? 'none' : 'transform 0.4s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
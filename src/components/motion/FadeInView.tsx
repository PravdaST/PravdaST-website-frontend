'use client'

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function FadeInView({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  className = '',
  as = 'div',
  ...props
}: FadeInViewProps & Omit<MotionProps, 'initial' | 'whileInView' | 'transition' | 'viewport'>) {
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 1, y: 0 };
      case 'down': return { opacity: 1, y: 0 };
      case 'left': return { opacity: 1, x: 0 };
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
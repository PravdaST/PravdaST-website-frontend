'use client'

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  className?: string;
  viewport?: { once?: boolean };
  as?: keyof JSX.IntrinsicElements;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  className = '',
  viewport = { once: true },
  as = 'div',
  ...props
}: FadeInProps & Omit<MotionProps, 'initial' | 'animate' | 'transition' | 'whileInView' | 'viewport'>) {
  
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
      animate={getFinalPosition()}
      transition={{ duration, delay }}
      whileInView={viewport ? getFinalPosition() : undefined}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
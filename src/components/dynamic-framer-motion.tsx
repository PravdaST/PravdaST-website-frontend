'use client';

import dynamic from 'next/dynamic';
import { ComponentType, ReactNode } from 'react';

// Helper type for motion component props
type MotionProps = {
  children?: ReactNode;
  [key: string]: any;
};

// Dynamic import of framer-motion div component with no SSR
export const DynamicMotionDiv = dynamic<MotionProps>(
  () => import('framer-motion').then(mod => {
    const Component: ComponentType<MotionProps> = ({ children, ...props }) => {
      const { motion } = mod;
      return <motion.div {...props}>{children}</motion.div>;
    };
    return Component;
  }),
  { 
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-800/50 rounded" />
  }
);

// Dynamic import of AnimatePresence with no SSR
export const DynamicAnimatePresence = dynamic<{ children: ReactNode }>(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
);

// Export a lazy motion wrapper for sections
export const LazyMotionSection = dynamic<MotionProps>(
  () => import('framer-motion').then(mod => {
    const Component: ComponentType<MotionProps> = ({ children, ...props }) => {
      const { motion } = mod;
      return <motion.section {...props}>{children}</motion.section>;
    };
    return Component;
  }),
  { 
    ssr: false,
    loading: () => <section className="animate-pulse bg-gray-800/50 rounded min-h-[200px]" />
  }
);
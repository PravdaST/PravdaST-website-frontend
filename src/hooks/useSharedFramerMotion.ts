// Shared Framer Motion hook to prevent multiple imports
// Reduces bundle size by centralizing motion imports

import { 
  motion, 
  useInView, 
  useAnimation, 
  AnimatePresence,
  Variants,
  MotionProps 
} from 'framer-motion'
import { useRef, useEffect } from 'react'

// Pre-defined motion variants for consistent animations
export const sharedVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}

// Shared motion components to prevent re-creation
export const MotionDiv = motion.div
export const MotionSection = motion.section  
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionP = motion.p

// Hook for consistent scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: threshold
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}

// Pre-configured animation props for common patterns
export const fadeInProps = {
  initial: 'hidden',
  animate: 'visible', 
  variants: sharedVariants.fadeIn,
  transition: { duration: 0.6 }
}

export const slideUpProps = {
  initial: 'hidden',
  animate: 'visible',
  variants: sharedVariants.slideUp,
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const scaleProps = {
  initial: 'hidden',
  animate: 'visible',
  variants: sharedVariants.scale,
  transition: { duration: 0.5, ease: 'easeOut' }
}

// Additional motion components for specific elements
export const MotionCircle = motion.circle
export const MotionA = motion.a

// Export all motion utilities from single source
export { 
  motion, 
  useInView, 
  useAnimation, 
  AnimatePresence,
  type Variants,
  type MotionProps 
}
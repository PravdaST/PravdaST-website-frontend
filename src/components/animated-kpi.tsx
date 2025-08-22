"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedKPIProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const AnimatedKPI = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 2.5,
  className = "text-2xl font-bold text-green-400",
  decimals = 0
}: AnimatedKPIProps) => {
  const count = useMotionValue(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const rounded = useTransform(count, (latest) => {
    if (decimals === 0) {
      return Math.round(latest);
    }
    return parseFloat(latest.toFixed(decimals));
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    
    const controls = animate(count, value, { 
      duration,
      ease: "easeOut"
    });
    
    return controls.stop;
  }, [isInView, value, duration, count]);

  return (
    <motion.div ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
};

// Example usage:
// <AnimatedKPI value={1800} suffix=" лв" prefix="" />
// <AnimatedKPI value={23} suffix="+" />
// <AnimatedKPI value={85} suffix="%" />
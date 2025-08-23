"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition" | "viewport"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

const SlideIn = React.forwardRef<HTMLDivElement, SlideInProps>(
  ({ 
    children, 
    direction = "up", 
    distance = 20, 
    duration = 0.6, 
    delay = 0, 
    className, 
    once = true,
    ...props 
  }, ref) => {
    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { opacity: 0, y: distance };
        case "down":
          return { opacity: 0, y: -distance };
        case "left":
          return { opacity: 0, x: distance };
        case "right":
          return { opacity: 0, x: -distance };
        default:
          return { opacity: 0, y: distance };
      }
    };

    const getFinalPosition = () => {
      switch (direction) {
        case "up":
        case "down":
          return { opacity: 1, y: 0 };
        case "left":
        case "right":
          return { opacity: 1, x: 0 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={getInitialPosition()}
        whileInView={getFinalPosition()}
        transition={{ duration, delay }}
        viewport={{ once }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

SlideIn.displayName = "SlideIn";

export default SlideIn;
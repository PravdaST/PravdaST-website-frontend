"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleOnHoverProps extends Omit<HTMLMotionProps<"div">, "whileHover" | "whileTap"> {
  children: React.ReactNode;
  scale?: number;
  tapScale?: number;
  className?: string;
}

const ScaleOnHover = React.forwardRef<HTMLDivElement, ScaleOnHoverProps>(
  ({ children, scale = 1.05, tapScale = 0.98, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        whileHover={{ scale }}
        whileTap={{ scale: tapScale }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleOnHover.displayName = "ScaleOnHover";

export default ScaleOnHover;
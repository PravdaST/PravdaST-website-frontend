"use client";

import React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

interface PravdaHeadingProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  accent?: boolean;
  className?: string;
}

const headingSizeClasses = {
  xs: "text-xs",
  sm: "text-sm", 
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl md:text-5xl",
  "5xl": "text-5xl md:text-6xl",
  "6xl": "text-6xl md:text-7xl",
  "7xl": "text-7xl md:text-8xl",
  "8xl": "text-8xl md:text-9xl",
  "9xl": "text-9xl md:text-[12rem] lg:text-[14rem]"
};

const PravdaHeading = React.forwardRef<HTMLHeadingElement, PravdaHeadingProps>(
  ({ children, as: Component = "h2", size = "4xl", accent = false, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-bold text-white",
          headingSizeClasses[size],
          accent && "text-[#ECB629]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

PravdaHeading.displayName = "PravdaHeading";

export default PravdaHeading;
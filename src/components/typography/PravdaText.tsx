"use client";

import React from "react";
import { cn } from "@/lib/utils";

type TextVariant = "default" | "muted" | "accent" | "white" | "light";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";

interface PravdaTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const textVariantClasses = {
  default: "text-gray-300",
  muted: "text-gray-400", 
  accent: "text-[#ECB629]",
  white: "text-white",
  light: "text-gray-200"
};

const textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg", 
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
};

const PravdaText = React.forwardRef<HTMLParagraphElement, PravdaTextProps>(
  ({ children, variant = "default", size = "base", className, as: Component = "p", ...props }, ref) => {
    const elementProps = {
      className: cn(
        textVariantClasses[variant],
        textSizeClasses[size],
        className
      ),
      ...props
    };

    if (Component === "p") {
      return (
        <Component ref={ref} {...elementProps}>
          {children}
        </Component>
      );
    }

    return (
      <Component {...elementProps}>
        {children}
      </Component>
    );
  }
);

PravdaText.displayName = "PravdaText";

export default PravdaText;
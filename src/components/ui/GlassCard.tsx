import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  
  // Size variants
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  
  // Border color variants
  borderColor?: 'primary' | 'yellow' | 'red' | 'green' | 'blue'
  borderOpacity?: '10' | '20' | '30' | '40' | '50'
  
  // Glass variants
  variant?: 'default' | 'navigation' | 'overlay'
  
  // Hover effects
  hoverScale?: boolean
  hoverBorder?: boolean
  hoverShadow?: boolean
  
  // Additional styles
  shadow?: boolean
  shadowColor?: string
  minWidth?: string
}

export function GlassCard({
  children,
  className = "",
  padding = 'lg',
  rounded = '2xl',
  borderColor = 'primary',
  borderOpacity = '20',
  variant = 'default',
  hoverScale = false,
  hoverBorder = true,
  hoverShadow = false,
  shadow = false,
  shadowColor = '[#ECB629]/10',
  minWidth
}: GlassCardProps) {
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-12'
  }
  
  // Rounded classes
  const roundedClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  }
  
  // Border color classes
  const borderColorClasses = {
    primary: `border-[#ECB629]/${borderOpacity}`,
    yellow: `border-yellow-400/${borderOpacity}`,
    red: `border-red-500/${borderOpacity}`,
    green: `border-green-400/${borderOpacity}`,
    blue: `border-blue-400/${borderOpacity}`
  }
  
  // Glass variant classes - Performance optimized
  const variantClasses = {
    default: 'performance-glassmorphism performance-card',
    navigation: 'performance-glassmorphism performance-nav bg-black/30',
    overlay: 'performance-glassmorphism glass-overlay'
  }
  
  // Hover effects
  const hoverClasses = []
  if (hoverScale) hoverClasses.push('hover:scale-105')
  if (hoverBorder) hoverClasses.push(`hover:border-[#ECB629]/${Number(borderOpacity) + 20}`)
  if (hoverShadow) hoverClasses.push('hover:shadow-2xl')
  
  // Additional classes
  const additionalClasses = []
  if (shadow) additionalClasses.push(`shadow-2xl shadow-${shadowColor}`)
  if (minWidth) additionalClasses.push(`min-w-[${minWidth}]`)
  
  const finalClassName = cn(
    variantClasses[variant],
    'border',
    borderColorClasses[borderColor],
    paddingClasses[padding],
    roundedClasses[rounded],
    'transition-all duration-300',
    ...hoverClasses,
    ...additionalClasses,
    className
  )
  
  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}
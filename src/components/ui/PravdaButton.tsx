import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface PravdaButtonProps {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const PravdaButton: React.FC<PravdaButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className,
  children,
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles = "font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-[#ECB629] text-black hover:bg-[#ECB629]/90 hover:scale-105 active:scale-95",
    outline: "border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black bg-transparent",
    secondary: "bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-500 hover:to-green-500",
    ghost: "text-white hover:text-[#ECB629] bg-transparent hover:bg-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl", 
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <Button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={iconSizes[size]} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={iconSizes[size]} />
      )}
    </Button>
  );
};

export default PravdaButton;
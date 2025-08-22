// Server Component Wrapper Pattern
// Wrap client components to enable server-side rendering where possible

import { ReactNode } from 'react';

interface ServerWrapperProps {
  children: ReactNode;
  className?: string;
}

// This wrapper enables server-side rendering for wrapped components
export function ServerWrapper({ children, className }: ServerWrapperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Layout wrapper for sections
export function SectionWrapper({ 
  children, 
  className = '',
  id,
}: ServerWrapperProps & { id?: string }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

// Container wrapper for consistent spacing
export function ContainerWrapper({ 
  children,
  size = 'default' 
}: ServerWrapperProps & { size?: 'default' | 'wide' | 'narrow' }) {
  const sizeClasses = {
    default: 'container mx-auto px-6',
    wide: 'max-w-7xl mx-auto px-6',
    narrow: 'max-w-4xl mx-auto px-6',
  };

  return (
    <div className={sizeClasses[size]}>
      {children}
    </div>
  );
}
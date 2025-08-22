import Image from 'next/image';
import { ComponentProps } from 'react';

interface OptimizedImageProps extends ComponentProps<typeof Image> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const ImageOptimized = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  ...props 
}: OptimizedImageProps) => {
  // Determine dimensions if not provided to prevent CLS
  const defaultWidth = width || 800;
  const defaultHeight = height || 600;
  
  return (
    <Image
      src={src}
      alt={alt}
      width={defaultWidth}
      height={defaultHeight}
      className={className}
      priority={priority}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ 
        width: 'auto', 
        height: 'auto',
        objectFit: 'contain'
      }}
      {...props}
    />
  );
};
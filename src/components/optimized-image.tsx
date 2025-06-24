import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  blur?: boolean;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  blur = true,
  placeholder = 'blur',
  sizes = '100vw',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Генериране на оптимизирани URL адреси
  const generateOptimizedSrc = (originalSrc: string, width?: number) => {
    // За production - ще използваме image optimization service
    if (process.env.NODE_ENV === 'production') {
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      params.set('q', quality.toString());
      params.set('f', 'webp');
      
      return `/_next/image?url=${encodeURIComponent(originalSrc)}&${params.toString()}`;
    }
    
    return originalSrc;
  };

  // Генериране на placeholder
  const generatePlaceholder = () => {
    if (placeholder === 'empty') return '';
    
    // Генерираме малко размазано изображение за placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 10, 10);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 10, 10);
    }
    
    return canvas.toDataURL();
  };

  // Intersection Observer за lazy loading
  useEffect(() => {
    if (priority) {
      // За приоритетни изображения зареждаме веднага
      setCurrentSrc(generateOptimizedSrc(src, width));
      return;
    }

    const img = imgRef.current;
    if (!img) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(generateOptimizedSrc(src, width));
            observerRef.current?.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px' // Започваме да зареждаме 50px преди да влезе в viewport
      }
    );

    observerRef.current.observe(img);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, width, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Fallback за грешка при зареждане
  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-gray-200 flex items-center justify-center text-gray-500 text-sm",
          className
        )}
        style={{ width, height }}
      >
        Изображението не може да се зареди
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)} style={{ width, height }}>
      {/* Placeholder изображение */}
      {!isLoaded && placeholder === 'blur' && (
        <img
          src={generatePlaceholder()}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}
      
      {/* Основно изображение */}
      <img
        ref={imgRef}
        src={currentSrc || undefined}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          {
            "opacity-0": !isLoaded,
            "opacity-100": isLoaded,
            "blur-sm": blur && !isLoaded
          }
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      
      {/* Loading индикатор */}
      {!isLoaded && currentSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

// Hook за преcalculating image dimensions
export function useImageDimensions(src: string) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = src;
  }, [src]);
  
  return dimensions;
}

// Responsive Image компонент
interface ResponsiveImageProps extends OptimizedImageProps {
  breakpoints?: { [key: string]: number };
}

export function ResponsiveImage({
  breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  ...props
}: ResponsiveImageProps) {
  const generateSrcSet = () => {
    const srcSet = Object.entries(breakpoints)
      .map(([_, width]) => `${props.src}?w=${width} ${width}w`)
      .join(', ');
    
    return srcSet;
  };

  const generateSizes = () => {
    const sizeQueries = Object.entries(breakpoints)
      .map(([breakpoint, width]) => `(max-width: ${width}px) ${width}px`)
      .join(', ');
    
    return `${sizeQueries}, 100vw`;
  };

  return (
    <OptimizedImage
      {...props}
      sizes={props.sizes || generateSizes()}
    />
  );
}
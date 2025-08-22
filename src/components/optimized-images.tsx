'use client';

import Image from 'next/image';
import { blurDataURLs } from '@/lib/blur-data-url';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  blurColor?: keyof typeof blurDataURLs;
  sizes?: string;
}

// Optimized Image component with blur placeholder
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  blurColor = 'yellow',
  sizes = '100vw',
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL={blurDataURLs[blurColor]}
      sizes={sizes}
      quality={85}
    />
  );
}

// Hero Image with priority loading
export function HeroImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className={className}
        placeholder="blur"
        blurDataURL={blurDataURLs.yellowDark}
        sizes="100vw"
        quality={90}
      />
    </div>
  );
}

// Lazy loaded image for below-the-fold content
export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={false}
      className={className}
      blurColor="gray"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
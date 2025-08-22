'use client';

import dynamic from 'next/dynamic';

// Lazy load embla-carousel only when needed
export const LazyCarousel = dynamic(
  () => import('embla-carousel-react').then(mod => {
    const useEmblaCarousel = mod.default;
    
    const Component = ({ children, options = {} }: any) => {
      const [emblaRef] = useEmblaCarousel(options);
      return (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>
      );
    };
    
    return { default: Component };
  }),
  { 
    ssr: false,
    loading: () => (
      <div className="flex gap-4 overflow-hidden">
        <div className="animate-pulse bg-gray-800/50 rounded h-64 w-full" />
      </div>
    )
  }
);
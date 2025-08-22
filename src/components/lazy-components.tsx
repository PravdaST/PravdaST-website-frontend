'use client';

// Dynamic imports for code splitting
import dynamic from 'next/dynamic';

// Loading component for better UX
const LoadingComponent = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ECB629]"></div>
  </div>
);

// Lazy load heavy components
export const LazyHeroSection = dynamic(
  () => import('@/components/hero-section').then(mod => ({ default: mod.HeroSection })),
  { 
    loading: LoadingComponent,
    ssr: true // Enable SSR for SEO
  }
);

export const LazyPartnersCarousel = dynamic(
  () => import('@/components/partners-carousel').then(mod => ({ default: mod.PartnersCarousel })),
  { 
    loading: LoadingComponent,
    ssr: false // No SSR needed for carousel
  }
);

export const LazyCaseStudiesSlider = dynamic(
  () => import('@/components/case-studies-new').then(mod => ({ default: mod.CaseStudiesSlider })),
  { 
    loading: LoadingComponent,
    ssr: false
  }
);

export const LazyAdvancedSearch = dynamic(
  () => import('@/components/advanced-search').then(mod => ({ default: mod.SearchTrigger })),
  { 
    loading: () => null,
    ssr: false
  }
);

// Lazy load CRM integration (heavy component)  
export const LazyCRMIntegration = dynamic(
  () => import('@/components/crm-integration'),
  { 
    loading: LoadingComponent,
    ssr: false
  }
);

// Lazy load calculators
export const LazyCalculators = dynamic(
  () => import('@/components/lazy-calculators'),
  { 
    loading: LoadingComponent,
    ssr: false
  }
);
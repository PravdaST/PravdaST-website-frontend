'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/hero-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import ProblemSection from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
// ProcessSection and SystemsSection moved to lazy loading
import { CTASection } from '@/components/cta-section'
import { HelmetSEO } from '@/components/seo-helmet'
import { pageSEOData } from '@/data/seo-pages'
import { tracking, ConversionStage } from '@/lib/tracking'

// Lazy load heavy components below the fold (P1 optimization)
const CaseStudiesSlider = dynamic(() => import('@/components/case-studies-new').then(mod => ({ default: mod.CaseStudiesSlider })), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-gray-800 rounded-2xl h-96 w-full max-w-4xl mx-auto"></div>
    </div>
  )
})

const ProcessSection = dynamic(() => import('@/components/process-section').then(mod => ({ default: mod.ProcessSection })), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-gray-700 rounded-2xl h-80 w-full max-w-6xl mx-auto"></div>
    </div>
  )
})

const SystemsSection = dynamic(() => import('@/components/systems-section').then(mod => ({ default: mod.SystemsSection })), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-gray-700 rounded-2xl h-96 w-full max-w-6xl mx-auto"></div>
    </div>
  )
})

export default function HomeClient() {
  useEffect(() => {
    // Track page view
    tracking.trackFunnelStage(ConversionStage.LANDING);
  }, []);

  const seoData = pageSEOData.home;

  return (
    <div className="min-h-screen relative">
      <HelmetSEO seo={seoData} pageSlug="" />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
    </div>
  );
}
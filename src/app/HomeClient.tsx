'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import ProblemSection from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { ProcessSection } from '@/components/process-section'
import { SystemsSection } from '@/components/systems-section'
import { CTASection } from '@/components/cta-section'
import { FooterServer } from '@/components/footer-server'
import { HelmetSEO } from '@/components/seo-helmet'
import { pageSEOData } from '@/data/seo-pages'
import { tracking, ConversionStage } from '@/lib/tracking'

// Lazy load heavy components below the fold
const CaseStudiesSlider = dynamic(() => import('@/components/case-studies-new').then(mod => ({ default: mod.CaseStudiesSlider })), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-gray-800 rounded-2xl h-96 w-full max-w-4xl mx-auto"></div>
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
      <Navigation />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
      <FooterServer />
    </div>
  );
}
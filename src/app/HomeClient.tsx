'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import ProblemSection from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { ProcessSection } from '@/components/process-section'
import { SystemsSection } from '@/components/systems-section'
import { CaseStudiesSlider } from '@/components/case-studies-new'
import { CTASection } from '@/components/cta-section'
import { FooterServer } from '@/components/footer-server'
import { HelmetSEO } from '@/components/seo-helmet'
import { pageSEOData } from '@/data/seo-pages'
import { tracking, ConversionStage } from '@/lib/tracking'

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
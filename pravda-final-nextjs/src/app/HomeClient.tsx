'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { SystemsSection } from '@/components/systems-section'
import { CaseStudiesSlider } from '@/components/case-studies-slider'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PartnersCarousel } from '@/components/partners-carousel'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { ProcessSection } from '@/components/process-section'
import usePageTracking from '@/hooks/usePageTracking'

export default function HomeClient() {
  usePageTracking()

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PartnersCarousel />
        <ProblemSection />
        <SolutionSection />
        <SystemsSection />
        <ProcessSection />
        <CaseStudiesSlider />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
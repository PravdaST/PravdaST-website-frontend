'use client'

import { useEffect, useState } from 'react'
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
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  usePageTracking()

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
        </div>
      </div>
    )
  }

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
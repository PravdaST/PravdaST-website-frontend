'use client'

import dynamic from 'next/dynamic'

// Dynamic imports for heavy components below fold
const CaseStudiesNew = dynamic(
  () => import('@/components/case-studies-new').then(mod => ({ default: mod.CaseStudiesNew })),
  {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-800 rounded-lg mx-4 my-8" />
  }
)

const BackgroundEffects = dynamic(
  () => import('@/components/background-effects').then(mod => ({ default: mod.BackgroundEffects })),
  {
    ssr: false
  }
)

const CaseStudiesSlider = dynamic(
  () => import('@/components/case-studies-slider').then(mod => ({ default: mod.CaseStudiesSlider })),
  {
    ssr: false,
    loading: () => <div className="h-64 animate-pulse bg-gray-800 rounded-lg mx-4 my-8" />
  }
)

export function HomeDynamicSections() {
  return (
    <>
      {/* Below fold - lazy loaded */}
      <CaseStudiesNew />
      <CaseStudiesSlider />
      
      {/* Background effects - pure decoration, load last */}
      <BackgroundEffects />
    </>
  )
}
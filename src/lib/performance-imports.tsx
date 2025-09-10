// Performance-optimized dynamic imports for heavy components
// This will dramatically reduce bundle size by code-splitting

import React, { lazy } from 'react'

// Heavy service pages - load only when needed  
export const TrendlabPageLazy = lazy(() => import('../app/services/trendlab/page'))
export const SEOStruktorPageLazy = lazy(() => import('../app/services/seo-struktor/page'))
export const ClientomatPageLazy = lazy(() => import('../app/services/clientomat/page'))
export const ClickstarterPageLazy = lazy(() => import('../app/services/clickstarter/page'))

// Heavy campaign components
export const MiniSitesContentLazy = lazy(() => import('../app/campaigns/mini-sites/MiniSitesContent'))
export const RestaurantTemplateLazy = lazy(() => import('../app/campaigns/mini-sites/restaurants/RestaurantTemplate'))
export const CafeTemplateLazy = lazy(() => import('../app/campaigns/mini-sites/cafes/CafeTemplate'))

// Blog and content components  
export const BlogClientLazy = lazy(() => import('../app/blog/BlogClient'))
export const WordPressPostClientLazy = lazy(() => import('../app/blog/wp-[slug]/WordPressPostClient'))
export const CaseStudiesClientLazy = lazy(() => import('../app/case-studies/CaseStudiesClient'))

// Loading component for Suspense
export const ComponentLoading = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ECB629]"></div>
    </div>
  )
}
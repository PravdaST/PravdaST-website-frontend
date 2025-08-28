'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

export function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Hide navigation on campaign pages to maintain clean, standalone branding
  // Exception: Show navigation on main /campaigns page
  const hiddenPaths = [
    '/campaigns/glovo',        // Glovo landing page
    '/campaigns/mini-sites',   // Mini-sites landing pages
    '/campaigns/landing-page', // Landing page campaign
    '/glovo',                  // Legacy glovo landing page
  ]
  
  const shouldHideNavigation = hiddenPaths.some(path => pathname.startsWith(path))
  
  if (shouldHideNavigation) {
    return null
  }
  
  return <Navigation />
}
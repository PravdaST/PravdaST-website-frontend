'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

export function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Hide navigation on campaign pages to maintain clean, standalone branding
  const hiddenPaths = [
    '/campaigns', // All campaign pages
    '/glovo',     // Legacy glovo landing page
  ]
  
  const shouldHideNavigation = hiddenPaths.some(path => pathname.startsWith(path))
  
  if (shouldHideNavigation) {
    return null
  }
  
  return <Navigation />
}
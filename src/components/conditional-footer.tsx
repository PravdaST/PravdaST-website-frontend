'use client'

import { usePathname } from 'next/navigation'
import { FooterServer } from './footer-server'

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on landing pages (campaigns, special landing pages, etc.)
  const hiddenPaths = [
    '/campaigns', // All campaign pages
    '/glovo',     // Legacy glovo landing page
  ]
  
  // Check if current path should hide footer
  const shouldHideFooter = hiddenPaths.some(path => pathname.startsWith(path))
  
  if (shouldHideFooter) {
    return null
  }
  
  return <FooterServer />
}
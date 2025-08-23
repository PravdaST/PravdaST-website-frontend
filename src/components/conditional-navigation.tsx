'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

export function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Navigation should appear on all pages - no special hiding logic needed for now
  // Could add custom logic here in the future if needed
  
  return <Navigation />
}
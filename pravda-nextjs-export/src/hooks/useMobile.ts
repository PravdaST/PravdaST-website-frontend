
import { useState, useEffect } from 'react'

export function useMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkIsMobile()

    // Add event listener
    window.addEventListener('resize', checkIsMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}

export function useTablet(breakpoint: number = 1024) {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < breakpoint)
    }

    checkIsTablet()
    window.addEventListener('resize', checkIsTablet)
    return () => window.removeEventListener('resize', checkIsTablet)
  }, [breakpoint])

  return isTablet
}

export function useDesktop(breakpoint: number = 1024) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= breakpoint)
    }

    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [breakpoint])

  return isDesktop
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('sm')

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      if (width < 640) setBreakpoint('sm')
      else if (width < 768) setBreakpoint('md')
      else if (width < 1024) setBreakpoint('lg')
      else if (width < 1280) setBreakpoint('xl')
      else setBreakpoint('2xl')
    }

    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  return breakpoint
}

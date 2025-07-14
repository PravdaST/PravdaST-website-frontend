'use client'

import { useEffect } from 'react'

const usePageTracking = () => {
  useEffect(() => {
    // Basic page tracking functionality
    console.log('Page loaded and tracked')
  }, [])
}

export default usePageTracking
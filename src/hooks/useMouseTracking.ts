'use client'

import { useState, useEffect } from 'react'

export interface MousePosition {
  x: number
  y: number
}

/**
 * Shared hook for mouse position tracking
 * Used by background components across the site
 * Centralizes the mouse tracking logic that was duplicated in 5+ files
 */
export const useMouseTracking = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}
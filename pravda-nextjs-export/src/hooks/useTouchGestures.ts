
import { useRef, useEffect } from 'react'

interface TouchGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onPinch?: (scale: number) => void
  threshold?: number
}

export function useTouchGestures(options: TouchGestureOptions) {
  const elementRef = useRef<HTMLElement>(null)
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const lastTouchDistance = useRef<number>(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const threshold = options.threshold || 50

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        }
      } else if (e.touches.length === 2 && options.onPinch) {
        const distance = Math.sqrt(
          Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) +
          Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
        )
        lastTouchDistance.current = distance
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && options.onPinch && lastTouchDistance.current > 0) {
        e.preventDefault()
        const distance = Math.sqrt(
          Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) +
          Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
        )
        const scale = distance / lastTouchDistance.current
        options.onPinch(scale)
        lastTouchDistance.current = distance
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || e.changedTouches.length !== 1) return

      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
        time: Date.now()
      }

      const deltaX = touchEnd.x - touchStartRef.current.x
      const deltaY = touchEnd.y - touchStartRef.current.y
      const deltaTime = touchEnd.time - touchStartRef.current.time

      // Only consider fast swipes (less than 300ms)
      if (deltaTime > 300) return

      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      // Determine swipe direction
      if (absX > absY && absX > threshold) {
        if (deltaX > 0 && options.onSwipeRight) {
          options.onSwipeRight()
        } else if (deltaX < 0 && options.onSwipeLeft) {
          options.onSwipeLeft()
        }
      } else if (absY > absX && absY > threshold) {
        if (deltaY > 0 && options.onSwipeDown) {
          options.onSwipeDown()
        } else if (deltaY < 0 && options.onSwipeUp) {
          options.onSwipeUp()
        }
      }

      touchStartRef.current = null
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: false })
    element.addEventListener('touchmove', handleTouchMove, { passive: false })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [options])

  return elementRef
}

export function useSwipeNavigation(onPrevious: () => void, onNext: () => void) {
  return useTouchGestures({
    onSwipeLeft: onNext,
    onSwipeRight: onPrevious,
    threshold: 75
  })
}

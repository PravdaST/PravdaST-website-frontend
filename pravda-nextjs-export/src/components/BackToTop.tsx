
"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      className={cn(
        "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
      onClick={scrollToTop}
      size="icon"
      variant="default"
      aria-label="Върни се на върха"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

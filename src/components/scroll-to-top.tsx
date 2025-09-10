'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up function
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Don't show scroll to top button on Glovo campaign page
  if (pathname === '/campaigns/glovo') {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Main button */}
            <div className="w-12 h-12 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-[#ECB629]/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#ECB629]/25 group-hover:scale-110">
              <ArrowUp className="w-5 h-5 text-black font-bold" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#ECB629] opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-300" />
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-[#ECB629] opacity-20 animate-ping" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
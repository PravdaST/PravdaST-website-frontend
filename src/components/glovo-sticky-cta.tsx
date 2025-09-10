'use client'

import { useState, useEffect } from 'react'
import { Calculator, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function GlovoStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCalculator = () => {
    const calculatorSection = document.querySelector('#calculator-section')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed right-4 bottom-8 z-50 md:right-8"
        >
          <button
            onClick={scrollToCalculator}
            className="group bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/30"
            aria-label="Отиди до калкулатора"
          >
            <div className="flex items-center space-x-3">
              <Calculator className="w-6 h-6" />
              <span className="hidden md:block font-semibold whitespace-nowrap pr-2">
                Калкулатор
              </span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          {/* Pulsing effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
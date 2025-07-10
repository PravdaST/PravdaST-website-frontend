
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundGradient?: string;
  children?: React.ReactNode;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA,
  backgroundGradient = "from-blue-50 to-indigo-100",
  children 
}: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center bg-gradient-to-br ${backgroundGradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="aspect-square bg-current rounded-lg" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block bg-[#ECB628]/10 text-[#ECB628] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {subtitle}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#d4a124] transition-all duration-200 transform hover:scale-105 group"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    {secondaryCTA.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {children || (
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#ECB628] rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-lg" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Play } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  videoUrl?: string
  backgroundType?: 'gradient' | 'pattern' | 'image'
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  videoUrl,
  backgroundType = 'gradient'
}: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title.split(' ').map((word, index) => (
              <span key={index} className={word.includes('™') ? 'text-[#ECB628]' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={ctaLink}
              className="bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#d4a524] transition-colors inline-flex items-center group"
            >
              {ctaText}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {videoUrl && (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center group"
              >
                <Play className="mr-2 h-5 w-5" />
                Гледайте видео
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

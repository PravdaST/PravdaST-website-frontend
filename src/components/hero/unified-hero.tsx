import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface UnifiedHeroProps {
  variant?: 'home' | 'about' | 'services' | 'seo' | 'landing';
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  showBackground?: boolean;
  customContent?: React.ReactNode;
  className?: string;
}

// Server Component - No 'use client'!
export function UnifiedHero({
  variant = 'home',
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  showBackground = true,
  customContent,
  className = '',
}: UnifiedHeroProps) {
  return (
    <section className={`relative overflow-hidden py-20 ${className}`}>
      {/* Static Background Pattern - No animations */}
      {showBackground && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(236, 182, 40, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(236, 182, 40, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 50% 20%, rgba(236, 182, 40, 0.15) 0%, transparent 50%)
              `,
              backgroundSize: '100% 100%',
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Subtitle */}
        {subtitle && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#ECB629]" />
            <span className="text-[#ECB629] font-medium">{subtitle}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Description */}
        {description && (
          <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button 
                  size="lg" 
                  className="group bg-[#ECB629] hover:bg-[#d4a520] text-black font-semibold"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#ECB629]/30 hover:border-[#ECB629] hover:bg-[#ECB629]/10"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ECB629] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Content */}
        {customContent}
      </div>
    </section>
  );
}
"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  image: string;
  quote: string;
  rating: number;
  savings: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialsCarousel = ({ 
  testimonials, 
  className = "" 
}: TestimonialsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glassmorphism border border-green-400/20 rounded-2xl p-6 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                    sizes="60px"
                    quality={85}
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-green-400">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      {i < testimonial.rating ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-sm">
                    💰 Спестени: {testimonial.savings}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={scrollPrev}
          className="bg-green-400/10 border-green-400/30 text-green-400 hover:bg-green-400/20"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={scrollNext}
          className="bg-green-400/10 border-green-400/30 text-green-400 hover:bg-green-400/20"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

// Example usage:
/*
const testimonials = [
  {
    id: 1,
    name: "Димитър П.",
    business: "Кебапче София",
    image: "/images/glovo/testimonial-1.jpg",
    quote: "Плащахме на Glovo 2,200 лв всеки месец. Сега плащаме 800 лв и клиентите ни поръчват директно от нас.",
    rating: 5,
    savings: "1,400 лв/месец"
  },
  // ... more testimonials
];

<TestimonialsCarousel testimonials={testimonials} />
*/
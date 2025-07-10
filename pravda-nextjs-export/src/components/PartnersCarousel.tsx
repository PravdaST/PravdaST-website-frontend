
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo: string;
  description?: string;
}

const partners: Partner[] = [
  { name: 'Google Premier Partner', logo: '/logos/google-partner.svg' },
  { name: 'Meta Business Partner', logo: '/logos/meta-partner.svg' },
  { name: 'LinkedIn Marketing Partner', logo: '/logos/linkedin-partner.svg' },
  { name: 'HubSpot Solutions Partner', logo: '/logos/hubspot-partner.svg' },
  { name: 'Klaviyo Partner', logo: '/logos/klaviyo-partner.svg' },
  { name: 'Zapier Expert', logo: '/logos/zapier-partner.svg' }
];

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Партньори и Сертификации
            </h3>
            <p className="text-gray-600">
              Работим с водещите платформи в индустрията
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {partners.slice(slideIndex * 3, slideIndex * 3 + 3).map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-center">
                        <div className="w-32 h-16 mx-auto mb-3 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-500 text-xs font-medium">
                            {partner.name}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ECB628]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

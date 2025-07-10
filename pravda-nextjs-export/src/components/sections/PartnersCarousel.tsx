
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function PartnersCarousel() {
  const partners = [
    {
      name: "Google",
      logo: "/partners/google.svg",
      width: 120,
      height: 40
    },
    {
      name: "Meta",
      logo: "/partners/meta.svg", 
      width: 120,
      height: 40
    },
    {
      name: "HubSpot",
      logo: "/partners/hubspot.svg",
      width: 120,
      height: 40
    },
    {
      name: "Klaviyo",
      logo: "/partners/klaviyo.svg",
      width: 120,
      height: 40
    },
    {
      name: "WordPress",
      logo: "/partners/wordpress.svg",
      width: 120,
      height: 40
    },
    {
      name: "Shopify",
      logo: "/partners/shopify.svg",
      width: 120,
      height: 40
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-slate-400 text-lg mb-8">
            Работим с водещите платформи за максимални резултати
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900/50 to-transparent z-10"></div>
          
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -50 * partners.length * 8]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xl font-bold">
                  {partner.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from "framer-motion";

export default function PartnersCarousel() {
  const partners = [
    "https://framerusercontent.com/images/VNuXXhkuBmEVCsU1tH3HGHHpKWo.png",
    "https://framerusercontent.com/images/L9tZdLz0p3EQ8Ir9AKOvWVIx91Q.png", 
    "https://framerusercontent.com/images/fJrE1PJrLhcuRHWOT7zEKMmCkac.png",
    "https://framerusercontent.com/images/xc8nZl3s4PvGU84AHQdkwpQ0A.png",
    "https://framerusercontent.com/images/HQ1hqrcNE2D6g4nYEXZjJPwGI.png"
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Partners Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 items-center justify-center"
            style={{ width: "1200px", margin: "0 auto" }}
          >
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "3600px" }} // 3 sets of logos
            >
              {/* First set */}
              {partners.map((logo, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
              
              {/* Second set */}
              {partners.map((logo, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
              
              {/* Third set */}
              {partners.map((logo, index) => (
                <div
                  key={`set3-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
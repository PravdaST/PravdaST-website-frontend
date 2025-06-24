import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  {
    name: "Claude",
    logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png",
  },
  {
    name: "Make",
    logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png",
  },
  {
    name: "Open AI",
    logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png",
  },
  {
    name: "N8N",
    logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png",
  },
  {
    name: "Elevenlabs",
    logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png",
  },
];

export const PartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get current set of logos to display (5 at a time)
  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentSlide + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* Main slider area */}
          <div className="h-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="flex justify-center items-center gap-12 h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  type: "tween"
                }}
              >
                {getVisibleLogos().map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${currentSlide}-${index}`}
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-[var(--pravdast-yellow)] opacity-100 scale-110' 
                    : 'bg-gray-600 opacity-40 hover:opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

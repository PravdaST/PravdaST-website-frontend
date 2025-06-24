import { motion } from "framer-motion";

const partners = [
  {
    name: "Framer",
    logo: "https://framerusercontent.com/images/48ha9ZR9aZQGQ6gZ8YUfElP3T0A.png",
  },
  {
    name: "Linear",
    logo: "https://framerusercontent.com/images/tgNSQ6HdcYqgR8R9QYV4Y8Jlw.png",
  },
  {
    name: "Figma",
    logo: "https://framerusercontent.com/images/lB9rmdl0B7rE3oCqX9gB4OwzY.png",
  },
  {
    name: "Webflow",
    logo: "https://framerusercontent.com/images/0V6HLPfPKxcGh9VZ9B8kL4NlA.png",
  },
  {
    name: "Notion",
    logo: "https://framerusercontent.com/images/PDCHpyJR0DQjgQp8xoLlQtg8.png",
  },
];

export const PartnersCarousel = () => {
  return (
    <section className="py-12 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />
          
          {/* Carousel container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: "300%" }}
            >
              {/* First set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto object-contain filter grayscale"
                  />
                </div>
              ))}
              
              {/* Second set */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto object-contain filter grayscale"
                  />
                </div>
              ))}
              
              {/* Third set */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-48 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto object-contain filter grayscale"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
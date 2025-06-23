import { motion } from "framer-motion";

const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "HubSpot", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Klaviyo_logo.svg"
  },
  {
    name: "WordPress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg"
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
  }
];

export const PartnersCarousel = () => {
  return (
    <section className="py-12 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Logo Carousel */}
        <div className="relative">
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <motion.div
              className="flex items-center gap-16 whitespace-nowrap"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "140px", height: "40px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-8 object-contain filter grayscale brightness-75 opacity-60 hover:opacity-80 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Duplicated set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "140px", height: "40px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-8 object-contain filter grayscale brightness-75 opacity-60 hover:opacity-80 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Third set for extra smoothness */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "140px", height: "40px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-8 object-contain filter grayscale brightness-75 opacity-60 hover:opacity-80 transition-all duration-300"
                    loading="lazy"
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

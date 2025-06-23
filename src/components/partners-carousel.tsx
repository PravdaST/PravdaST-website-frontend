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
    <section className="py-16 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Our core technologies
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            <motion.div
              className="flex items-center gap-20 whitespace-nowrap"
              animate={{
                x: [0, -100 * partners.length * 20] // Dynamic based on partners length
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "160px", height: "60px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-10 object-contain filter grayscale brightness-[0.5] opacity-70"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Duplicated set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "160px", height: "60px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-10 object-contain filter grayscale brightness-[0.5] opacity-70"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Third set for extra smoothness */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "160px", height: "60px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-10 object-contain filter grayscale brightness-[0.5] opacity-70"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Fourth set for perfect seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`fourth-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "160px", height: "60px" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-10 object-contain filter grayscale brightness-[0.5] opacity-70"
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

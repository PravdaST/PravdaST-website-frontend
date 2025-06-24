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
  return (
    <section className="py-16 bg-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div
            className="flex animate-infinite-scroll"
            style={{
              width: `${partners.length * 3 * 240}px`,
            }}
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[var(--pravdast-dark)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[var(--pravdast-dark)] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

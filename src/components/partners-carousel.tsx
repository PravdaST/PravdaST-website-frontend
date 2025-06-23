const partners = [
  { 
    name: "Partner 1",
    logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" 
  },
  { 
    name: "Partner 2",
    logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" 
  },
  { 
    name: "Partner 3",
    logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" 
  },
  { 
    name: "Partner 4",
    logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" 
  },
  { 
    name: "Partner 5",
    logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" 
  }
];

export const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6">
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {partners.map((partner, index) => (
              <li key={`first-${index}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </li>
            ))}
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {partners.map((partner, index) => (
              <li key={`second-${index}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </li>
            ))}
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {partners.map((partner, index) => (
              <li key={`third-${index}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 w-auto filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

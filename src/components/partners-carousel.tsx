// 1. Слагаме правилния списък с лога от Framer
const partners = [
  {
    name: "Partner 1", // <-- Не забравяйте да смените имената
    logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png",
  },
  {
    name: "Partner 2", // <-- Не забравяйте да смените имената
    logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png",
  },
  {
    name: "Partner 3", // <-- Не забравяйте да смените имената
    logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png",
  },
  {
    name: "Partner 4", // <-- Не забравяйте да смените имената
    logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png",
  },
  {
    name: "Partner 5", // <-- Не забравяйте да смените имената
    logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png",
  },
];

export const PartnersCarousel = () => {
  // Създаваме удължен масив за безшевния ефект
  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            Our Core Technologies & Partners
          </p>
        </div>

        <div
          className="w-full inline-flex flex-nowrap overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* 2. Използваме надеждната CSS анимация от tailwind.config.js */}
          <div className="flex w-max animate-infinite-scroll-reworked">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-10 w-auto filter grayscale brightness-75 opacity-60 transition-colors duration-300 hover:filter-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

'use client'

const partners = [
  { name: "Claude", logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" },
  { name: "Make", logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" },
  { name: "OpenAI", logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" },
  { name: "N8N", logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" },
  { name: "Elevenlabs", logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" },
];

export const PartnersCarousel = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full glassmorphism">
            <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse" />
            <span className="text-[#ECB629] font-semibold text-sm">
              ПАРТНЬОРИ И ТЕХНОЛОГИИ
            </span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="flex gap-8 animate-infinite-scroll">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-60 h-20 flex items-center justify-center glassmorphism rounded-xl p-4 hover:scale-105 hover:bg-slate-700/80 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ECB629]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0D0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0D0F] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
'use client'

export function PartnersCarousel() {
  const partners = [
    { name: 'Google', logo: '/partners/google.png' },
    { name: 'Meta', logo: '/partners/meta.png' },
    { name: 'HubSpot', logo: '/partners/hubspot.png' },
    { name: 'Klaviyo', logo: '/partners/klaviyo.png' },
    { name: 'WordPress', logo: '/partners/wordpress.png' },
  ]

  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Партньори и платформи
          </h2>
          <p className="text-gray-400">
            Работим с водещите платформи в индустрията
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="h-8 w-24 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
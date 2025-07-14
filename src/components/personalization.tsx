'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

interface LocationData {
  city: string
  region: string
  country: string
  latitude?: number
  longitude?: number
  timezone?: string
}

interface PersonalizationConfig {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  contact: {
    phone: string
    office: string
    workingHours: string
  }
  services: {
    localFocus: string
    pricing: {
      modifier: number
      currency: string
    }
  }
  testimonials: string[]
}

// Bulgarian cities and their personalization configs
const cityConfigs: Record<string, PersonalizationConfig> = {
  'София': {
    hero: {
      title: 'Бизнес инженеринг за София',
      subtitle: 'Помагаме на софийски компании да постигнат предвидим растеж чрез доказани системи',
      cta: 'Безплатна консултация в София'
    },
    contact: {
      phone: '+359 879 282 299',
      office: 'Офис София - бул. Витоша 15',
      workingHours: '09:00 - 18:00 (София време)'
    },
    services: {
      localFocus: 'Специализираме се в софийския B2B пазар с над 50 успешни проекта в столицата',
      pricing: { modifier: 1.2, currency: 'лв' }
    },
    testimonials: [
      'Pravda Agency удвои нашите leads в София за 3 месеца',
      'Най-добрата маркетинг агенция в София'
    ]
  },
  'Пловдив': {
    hero: {
      title: 'Дигитален растеж за Пловдив',
      subtitle: 'Локални експерти за пловдивски бизнеси. Работим дистанционно и на място',
      cta: 'Среща в Пловдив'
    },
    contact: {
      phone: '+359 879 282 299',
      office: 'Партньор офис Пловдив - Главна 42',
      workingHours: '09:00 - 17:30 (местно време)'
    },
    services: {
      localFocus: 'Разбираме спецификата на пловдивския пазар и културните особености на региона',
      pricing: { modifier: 1.0, currency: 'лв' }
    },
    testimonials: [
      'Отлични резултати за нашия бизнес в Пловдив',
      'Професионален подход към местния пазар'
    ]
  },
  'Варна': {
    hero: {
      title: 'Морски бизнес растеж',
      subtitle: 'Основният ни офис е във Варна. Експерти в туризъм, логистика и IT сектора',
      cta: 'Посетете ни във Варна'
    },
    contact: {
      phone: '+359 879 282 299',
      office: 'Главен офис Варна - ул. Дебър №58',
      workingHours: '08:30 - 17:30 (местно време)'
    },
    services: {
      localFocus: 'Базирани във Варна с дълбоко разбиране на черноморския туризъм и логистика',
      pricing: { modifier: 0.9, currency: 'лв' }
    },
    testimonials: [
      'Pravda Agency е топ избор за варненски компании',
      'Отлично познаване на местния пазар'
    ]
  },
  'Бургас': {
    hero: {
      title: 'Растеж за Бургас',
      subtitle: 'Специализирани решения за бургаския бизнес. Туризъм, промишленост, логистика',
      cta: 'Консултация в Бургас'
    },
    contact: {
      phone: '+359 879 282 299',
      office: 'Партньор Бургас - ул. Александровска 21',
      workingHours: '09:00 - 17:00 (местно време)'
    },
    services: {
      localFocus: 'Опит с бургаски компании в туризъм, химическа промишленост и транспорт',
      pricing: { modifier: 0.95, currency: 'лв' }
    },
    testimonials: [
      'Страхотни резултати за туристическия ни бизнес',
      'Разбират спецификата на Бургас'
    ]
  }
}

// Default config for unknown cities
const defaultConfig: PersonalizationConfig = {
  hero: {
    title: 'Бизнес инженеринг за България',
    subtitle: 'Превръщаме хаотичния растеж в предвидими, измерими резултати навсякъде в България',
    cta: 'Безплатна онлайн консултация'
  },
  contact: {
    phone: '+359 879 282 299',
    office: 'Главен офис Варна + онлайн обслужване',
    workingHours: '09:00 - 18:00 (EET)'
  },
  services: {
    localFocus: 'Работим с компании от цяла България чрез дистанционни и хибридни модели',
    pricing: { modifier: 1.0, currency: 'лв' }
  },
  testimonials: [
    'Pravda Agency подобри нашия бизнес значително',
    'Отлични резултати в целия процес'
  ]
}

export function usePersonalization() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [config, setConfig] = useState<PersonalizationConfig>(defaultConfig)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Try to get location from IP geolocation API
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.city && data.country_code === 'BG') {
          const locationData: LocationData = {
            city: data.city,
            region: data.region,
            country: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone
          }
          
          setLocation(locationData)
          
          // Get personalization config for the city
          const cityConfig = cityConfigs[data.city] || defaultConfig
          setConfig(cityConfig)
          
          // Track location for analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'location_detected', {
              event_category: 'personalization',
              event_label: data.city,
              custom_map: { city: data.city, region: data.region }
            })
          }
        } else {
          // Use default config for non-Bulgarian or unknown locations
          setConfig(defaultConfig)
        }
      } catch (error) {
        console.log('Location detection failed, using default config')
        setConfig(defaultConfig)
      } finally {
        setIsLoading(false)
      }
    }

    getLocation()
  }, [])

  return { location, config, isLoading }
}

// Personalized hero section component
export function PersonalizedHero() {
  const { location, config, isLoading } = usePersonalization()

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center py-12">
      {location && (
        <div className="flex items-center justify-center gap-2 mb-4 text-[#ECB629]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Персонализирано за {location.city}</span>
        </div>
      )}
      
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        {config.hero.title}
      </h1>
      
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        {config.hero.subtitle}
      </p>
      
      <button className="bg-[#ECB629] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#d4a017] transition-colors">
        {config.hero.cta}
      </button>
    </div>
  )
}

// Personalized contact info component
export function PersonalizedContact() {
  const { config, isLoading } = usePersonalization()

  if (isLoading) return null

  return (
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center">
        <Phone className="w-6 h-6 text-[#ECB629] mb-2" />
        <h3 className="font-semibold text-white mb-1">Телефон</h3>
        <p className="text-gray-300">{config.contact.phone}</p>
      </div>
      
      <div className="flex flex-col items-center">
        <MapPin className="w-6 h-6 text-[#ECB629] mb-2" />
        <h3 className="font-semibold text-white mb-1">Офис</h3>
        <p className="text-gray-300">{config.contact.office}</p>
      </div>
      
      <div className="flex flex-col items-center">
        <Clock className="w-6 h-6 text-[#ECB629] mb-2" />
        <h3 className="font-semibold text-white mb-1">Работно време</h3>
        <p className="text-gray-300">{config.contact.workingHours}</p>
      </div>
    </div>
  )
}

// Personalized services section
export function PersonalizedServices() {
  const { config, isLoading } = usePersonalization()

  if (isLoading) return null

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Локален фокус</h3>
      <p className="text-gray-300 mb-6">{config.services.localFocus}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span>Базова цена: {(1000 * config.services.pricing.modifier).toFixed(0)} {config.services.pricing.currency}</span>
        <span>•</span>
        <span>Валута: {config.services.pricing.currency}</span>
      </div>
    </div>
  )
}

// Personalized testimonials
export function PersonalizedTestimonials() {
  const { config, isLoading } = usePersonalization()

  if (isLoading) return null

  return (
    <div className="space-y-4">
      {config.testimonials.map((testimonial, index) => (
        <div key={index} className="bg-slate-800 p-6 rounded-lg">
          <p className="text-gray-300 italic">"{testimonial}"</p>
        </div>
      ))}
    </div>
  )
}
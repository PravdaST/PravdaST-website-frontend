'use client'

import Link from 'next/link'
import { Facebook, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pravdast</h3>
            <p className="text-gray-300 mb-4">
              Бизнес инженеринг за предвидим растеж
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pravdast.agency/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@PravdaST" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/pravdast.agency/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/pravda-st/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo-struktor" className="text-gray-300 hover:text-white">
                  SEO Struktor™
                </Link>
              </li>
              <li>
                <Link href="/services/trendlab" className="text-gray-300 hover:text-white">
                  Trendlab™
                </Link>
              </li>
              <li>
                <Link href="/services/clickstarter" className="text-gray-300 hover:text-white">
                  Clickstarter™
                </Link>
              </li>
              <li>
                <Link href="/services/clientomat" className="text-gray-300 hover:text-white">
                  Clientomat™
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white">
                  Казуси
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300">гр.Варна ул. Дебър №58</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <a href="tel:+359879282299" className="text-gray-300 hover:text-white">
                  +359 879 282 299
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:contact@pravdast.agency" className="text-gray-300 hover:text-white">
                  contact@pravdast.agency
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Pravdast. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}
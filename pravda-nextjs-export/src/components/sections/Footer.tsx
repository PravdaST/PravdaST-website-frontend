'use client';

import Link from 'next/link';
import { Facebook, Youtube, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">Pravdast</div>
            <p className="text-slate-300">
              Business Engineering Platform за предсказуем растеж на B2B компании
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo-struktor" className="text-slate-300 hover:text-white transition-colors">
                  SEO Struktor
                </Link>
              </li>
              <li>
                <Link href="/services/clientomat" className="text-slate-300 hover:text-white transition-colors">
                  Clientomat
                </Link>
              </li>
              <li>
                <Link href="/services/trendlab" className="text-slate-300 hover:text-white transition-colors">
                  TrendLab
                </Link>
              </li>
              <li>
                <Link href="/services/clickstarter" className="text-slate-300 hover:text-white transition-colors">
                  ClickStarter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
                  Казуси
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Контакт
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Контакт</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <div className="text-slate-300">
                  <div>ул. Дебър №58</div>
                  <div>Варна, България</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <a href="tel:+359879282299" className="text-slate-300 hover:text-white transition-colors">
                  +359 879 282 299
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:contact@pravdast.agency" className="text-slate-300 hover:text-white transition-colors">
                  contact@pravdast.agency
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2024 Pravdast. Всички права запазени.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Политика за поверителност
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
              Условия за ползване
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Pravdast
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Начало
              </Link>
              <Link href="/services" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Услуги
              </Link>
              <Link href="/about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                За нас
              </Link>
              <Link href="/blog" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Блог
              </Link>
              <Link href="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Контакти
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Начало
            </Link>
            <Link href="/services" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Услуги
            </Link>
            <Link href="/about" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              За нас
            </Link>
            <Link href="/blog" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Блог
            </Link>
            <Link href="/contact" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Контакти
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
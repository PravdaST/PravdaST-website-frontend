
'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-400 ${className}`} aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center hover:text-[var(--pravdast-yellow)] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Начало</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-600" />
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <Link 
              href={item.href}
              className="hover:text-[var(--pravdast-yellow)] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

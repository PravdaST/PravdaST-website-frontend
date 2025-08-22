// Server Component - No 'use client'!
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbServerProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbServer({ items, className = '' }: BreadcrumbServerProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm ${className}`}
    >
      {/* Home link */}
      <Link 
        href="/" 
        className="text-gray-400 hover:text-[#ECB629] transition-colors flex items-center"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-600 mx-1" />
            
            {item.href && !isLast ? (
              <Link 
                href={item.href}
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-[#ECB629]' : 'text-gray-400'}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
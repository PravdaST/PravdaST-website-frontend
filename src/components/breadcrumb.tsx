import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-[#ECB629] transition-colors"
            aria-label="Начало"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-500" />
            
            {item.href ? (
              <Link 
                href={item.href}
                className="hover:text-[#ECB629] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium truncate max-w-xs">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
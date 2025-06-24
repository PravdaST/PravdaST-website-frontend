import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const [location] = useLocation();
  
  // Автоматично генериране на breadcrumbs от URL ако не са подадени
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathnames = location.split('/').filter(x => x);
    const breadcrumbs: BreadcrumbItem[] = [
      { title: 'Начало', href: '/' }
    ];

    const pathMap: Record<string, string> = {
      'services': 'Услуги',
      'seo-struktor': 'SEO Struktor™',
      'clientomat': 'Clientomat™',
      'sales-engine': 'Sales Engine™',
      'blog': 'Блог',
      'case-studies': 'Казуси',
      'about': 'За нас',
      'contact': 'Контакт'
    };

    pathnames.forEach((pathname, index) => {
      const href = '/' + pathnames.slice(0, index + 1).join('/');
      const title = pathMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
      breadcrumbs.push({ title, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            )}
            {index === 0 && (
              <Home className="h-4 w-4 mr-2 text-gray-400" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="text-gray-900 dark:text-gray-100 font-medium"
                aria-current="page"
              >
                {breadcrumb.title}
              </span>
            ) : (
              <Link 
                href={breadcrumb.href}
                className="hover:text-[#ECB628] transition-colors duration-200"
              >
                {breadcrumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Hook за генериране на structured data за breadcrumbs
export function useBreadcrumbSchema() {
  const [location] = useLocation();
  
  const generateBreadcrumbSchema = () => {
    const pathnames = location.split('/').filter(x => x);
    if (pathnames.length === 0) return null;
    
    const baseUrl = 'https://www.pravdagency.eu';
    const pathMap: Record<string, string> = {
      'services': 'Услуги',
      'seo-struktor': 'SEO Struktor™',
      'clientomat': 'Clientomat™', 
      'sales-engine': 'Sales Engine™',
      'blog': 'Блог',
      'case-studies': 'Казуси',
      'about': 'За нас',
      'contact': 'Контакт'
    };

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Начало",
        "item": baseUrl
      }
    ];

    pathnames.forEach((pathname, index) => {
      const href = baseUrl + '/' + pathnames.slice(0, index + 1).join('/');
      const title = pathMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      breadcrumbList.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": title,
        "item": href
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    };
  };

  return generateBreadcrumbSchema();
}
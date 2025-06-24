import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Users, 
  BookOpen, 
  Phone, 
  Info,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavigationProps {
  className?: string;

export function MobileNavigation({ className }: MobileNavigationProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Проследяване на scroll за промяна на навигацията
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    {
      href: '/',
      label: 'Начало',
      icon: <Home className="h-5 w-5" />,
      description: 'Главна страница на Pravdast'
    },
    {
      href: '/services',
      label: 'Услуги',
      icon: <Briefcase className="h-5 w-5" />,
      description: 'Бизнес инженеринг решения',
      badge: 'Популярно'
    },
    {
      href: '/case-studies',
      label: 'Казуси',
      icon: <Users className="h-5 w-5" />,
      description: 'Истории за успех'
    },
    {
      href: '/blog',
      label: 'Блог',
      icon: <BookOpen className="h-5 w-5" />,
      description: 'Експертни статии',
      badge: 'Ново'
    },
    {
      href: '/about',
      label: 'За нас',
      icon: <Info className="h-5 w-5" />,
      description: 'Екип и философия'
    },
    {
      href: '/contact',
      label: 'Контакти',
      icon: <Phone className="h-5 w-5" />,
      description: 'Свържете се с нас',
      highlight: true
  ];

  const serviceItems = [
    {
      href: '/services/seo-struktor',
      label: 'SEO Struktor™',
      description: 'Системен подход към SEO'
    },
    {
      href: '/services/clientomat',
      label: 'Clientomat™',
      description: 'Автоматизация на клиентски процеси'
    },
    {
      href: '/services/sales-engine',
      label: 'Sales Engine™',
      description: 'Система за продажби'
  ];

  const closeMenu = () => setIsOpen(false);

  const isActiveRoute = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Mobile Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-foreground">Pravdast</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10"
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Отвори меню</span>
                </Button>
              </SheetTrigger>

              <SheetContent 
                side="right" 
                className="w-full sm:w-80 p-0 overflow-y-auto"
                {/* Header в менюто */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">P</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Pravdast</div>
                      <div className="text-sm text-muted-foreground">Business Engineering</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeMenu}
                    className="h-8 w-8"
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Основна навигация */}
                <div className="p-6 space-y-1">
                  <div className="text-sm font-medium text-muted-foreground mb-4">
                    Основно меню
                  </div>
                  
                  {mainNavItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMenu}>
                      <div className={cn(
                        isActiveRoute(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted",
                        item.highlight && "border border-primary/20"
                      )}>
                        <div className={cn(
                          "flex-shrink-0",
                          isActiveRoute(item.href) 
                            ? "text-primary-foreground" 
                            : "text-muted-foreground group-hover:text-foreground"
                        )}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium truncate">{item.label}</span>
                            {item.badge && (
                              <Badge 
                                variant="secondary" 
                                className="text-xs px-1.5 py-0.5"
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <div className={cn(
                            "text-sm truncate",
                            isActiveRoute(item.href)
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          )}>
                            {item.description}
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          "h-4 w-4 flex-shrink-0",
                          isActiveRoute(item.href)
                            ? "text-primary-foreground/60"
                            : "text-muted-foreground"
                        )} />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Услуги секция */}
                <div className="px-6 pb-6">
                  <div className="text-sm font-medium text-muted-foreground mb-4">
                    Нашите услуги
                  </div>
                  <div className="space-y-2">
                    {serviceItems.map((service) => (
                      <Link key={service.href} href={service.href} onClick={closeMenu}>
                        <div className={cn(
                          isActiveRoute(service.href) && "bg-primary/10 border border-primary/20"
                        )}>
                          <div>
                            <div className="font-medium text-sm">{service.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA секция */}
                <div className="p-6 border-t bg-muted/30">
                  <div className="space-y-3">
                    <div className="text-sm font-medium">Готови за растеж?</div>
                    <div className="text-xs text-muted-foreground">
                      Започнете вашето пътуване към предсказуем бизнес растеж
                    </div>
                    <Link href="/contact" onClick={closeMenu}>
                      <Button className="w-full" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Свържете се с нас
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>


    </div>
  );

// Bottom Navigation за мобилни устройства
export function MobileBottomNavigation() {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide при scroll надолу
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 100;
      
      setIsVisible(!isScrollingDown);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const bottomNavItems = [
    { href: '/', label: 'Начало', icon: <Home className="h-5 w-5" /> },
    { href: '/services', label: 'Услуги', icon: <Briefcase className="h-5 w-5" /> },
    { href: '/blog', label: 'Блог', icon: <BookOpen className="h-5 w-5" /> },
    { href: '/contact', label: 'Контакт', icon: <Phone className="h-5 w-5" /> }
  ];

  return (
    <div className={cn(
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="bg-background/95 backdrop-blur-md border-t">
        <div className="grid grid-cols-4 h-16">
          {bottomNavItems.map((item) => {
            const isActive = item.href === '/' ? location === '/' : location.startsWith(item.href);
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  {item.icon}
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

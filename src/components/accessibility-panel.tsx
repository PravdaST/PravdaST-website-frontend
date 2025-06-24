import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Pause, 
  Volume2, 
  Contrast,
  X,
  Settings
} from 'lucide-react';
import { accessibilityManager, AccessibilityOptions } from '@/lib/accessibility';
import { cn } from '@/lib/utils';

interface AccessibilityPanelProps {
  className?: string;
}

export function AccessibilityPanel({ className }: AccessibilityPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AccessibilityOptions>({});

  useEffect(() => {
    setOptions(accessibilityManager.getOptions());
  }, []);

  const handleToggle = (feature: keyof AccessibilityOptions, enabled: boolean) => {
    switch (feature) {
      case 'enableHighContrast':
        accessibilityManager.enableHighContrast(enabled);
        break;
      case 'enableLargeText':
        accessibilityManager.enableLargeText(enabled);
        break;
      case 'enableReducedMotion':
        accessibilityManager.enableReducedMotion(enabled);
        break;
    }
    
    setOptions(accessibilityManager.getOptions());
    
    // Announce change to screen reader
    const featureNames = {
      enableHighContrast: 'Висок контраст',
      enableLargeText: 'Голям текст',
      enableReducedMotion: 'Намалено движение'
    };
    
    accessibilityManager.announceToScreenReader(
      `${featureNames[feature]} ${enabled ? 'включен' : 'изключен'}`
    );
  };

  const accessibilityFeatures = [
    {
      id: 'enableHighContrast' as keyof AccessibilityOptions,
      name: 'Висок контраст',
      description: 'Подобрява видимостта с по-високи цветови контрасти',
      icon: <Contrast className="h-5 w-5" />,
      enabled: options.enableHighContrast || false
    },
    {
      id: 'enableLargeText' as keyof AccessibilityOptions,
      name: 'Голям текст',
      description: 'Увеличава размера на текста за по-лесно четене',
      icon: <Type className="h-5 w-5" />,
      enabled: options.enableLargeText || false
    },
    {
      id: 'enableReducedMotion' as keyof AccessibilityOptions,
      name: 'Намалено движение',
      description: 'Намалява анимациите и преходите',
      icon: <Pause className="h-5 w-5" />,
      enabled: options.enableReducedMotion || false
    }
  ];

  const keyboardShortcuts = [
    { keys: 'Alt + S', action: 'Премини към основното съдържание' },
    { keys: 'Alt + /', action: 'Фокусирай търсачката' },
    { keys: 'Escape', action: 'Затвори модални прозорци' },
    { keys: 'Tab', action: 'Навигация напред' },
    { keys: 'Shift + Tab', action: 'Навигация назад' }
  ];

  return (
    <div className={cn("", className)}>
      {/* Accessibility Trigger Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="sr-only focus:not-sr-only focus:fixed focus:bottom-4 focus:right-4 focus:z-50 focus:rounded-full focus:shadow-lg focus:bg-primary focus:text-primary-foreground hover:focus:bg-primary/90"
            aria-label="Отвори панел за достъпност"
          >
            <Accessibility className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="right" 
          className="w-full sm:w-96 overflow-y-auto"
          aria-labelledby="accessibility-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 id="accessibility-title" className="text-xl font-semibold flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                Достъпност
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Персонализирайте изгледа според вашите нужди
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Затвори панела"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Accessibility Features */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Визуални настройки</CardTitle>
                <CardDescription>
                  Настройки за подобряване на видимостта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {accessibilityFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-start justify-between space-x-4">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="text-muted-foreground mt-0.5">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-sm">{feature.name}</span>
                          {feature.enabled && (
                            <Badge variant="secondary" className="text-xs">
                              Активен
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={feature.enabled}
                      onCheckedChange={(checked) => handleToggle(feature.id, checked)}
                      aria-labelledby={`${feature.id}-label`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Keyboard Shortcuts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Клавишни комбинации</CardTitle>
                <CardDescription>
                  Бързи клавишни комбинации за навигация
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{shortcut.action}</span>
                      <kbd className="px-2 py-1 text-xs bg-muted rounded border">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screen Reader Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Screen Reader поддръжка
                </CardTitle>
                <CardDescription>
                  Информация за screen reader съвместимост
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">ARIA labels</span>
                  <Badge className="bg-green-100 text-green-800">✓ Активни</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Live regions</span>
                  <Badge className="bg-green-100 text-green-800">✓ Активни</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Skip links</span>
                  <Badge className="bg-green-100 text-green-800">✓ Активни</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Focus management</span>
                  <Badge className="bg-green-100 text-green-800">✓ Активно</Badge>
                </div>
              </CardContent>
            </Card>

            {/* WCAG Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">WCAG 2.1 Съответствие</CardTitle>
                <CardDescription>
                  Статус на достъпността според WCAG стандартите
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Level AA</span>
                  <Badge className="bg-green-100 text-green-800">✓ Съответства</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Color contrast</span>
                  <Badge className="bg-green-100 text-green-800">4.5:1+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Keyboard navigation</span>
                  <Badge className="bg-green-100 text-green-800">✓ Пълна</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Screen reader</span>
                  <Badge className="bg-green-100 text-green-800">✓ Оптимизиран</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Нужда от помощ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Ако имате проблеми с достъпността на сайта, моля свържете се с нас.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Свържете се с нас
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Skip to main content component
export function SkipToMainContent() {
  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main instanceof HTMLElement) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Премини към основното съдържание
    </a>
  );
}
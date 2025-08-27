"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Store, Coffee, Wrench, Heart, 
  Clock, Phone, MapPin, Menu as MenuIcon, 
  Star, Check, AlertCircle, ChevronRight,
  TrendingUp, Users, Timer
} from "lucide-react";
import MiniSitesForm from "./MiniSitesForm";
import Script from "next/script";

// Demo menu data
type MenuItem = { name: string; price: number; note?: string };
type MenuCategory = { name: string; icon: string; items: MenuItem[] };

const demoMenu: MenuCategory[] = [
  { 
    name: "Пици", 
    icon: "🍕",
    items: [
      { name: "Маргарита", price: 8.9, note: "Домат, моцарела, босилек" },
      { name: "Пеперони", price: 10.5, note: "Домат, моцарела, пеперони" },
      { name: "Капричоза", price: 11.9, note: "Домат, моцарела, шунка, гъби" }
    ]
  },
  { 
    name: "Салати",
    icon: "🥗", 
    items: [
      { name: "Шопска", price: 6.5, note: "Домати, краставици, лук, сирене" },
      { name: "Цезар", price: 9.9, note: "Айсберг, пилешко, крутони, пармезан" },
      { name: "Гръцка", price: 7.9, note: "Домати, краставици, маслини, фета" }
    ]
  },
  {
    name: "Напитки",
    icon: "🥤",
    items: [
      { name: "Кока-Кола", price: 2.5, note: "330мл" },
      { name: "Фреш портокал", price: 4.5, note: "300мл" },
      { name: "Кафе еспресо", price: 2.2 }
    ]
  }
];

// Business categories with demo images
const businessCategories = [
  { 
    id: "restaurants", 
    name: "Ресторанти", 
    icon: Store,
    examples: "Пицарии, таверни, барове",
    benefits: "+40% онлайн поръчки за 30 дни"
  },
  { 
    id: "cafes", 
    name: "Кафенета & Fast Food", 
    icon: Coffee,
    examples: "Бургер, дюнер, кафе",
    benefits: "-2 часа дневно телефонни въпроси"
  },
  { 
    id: "services", 
    name: "Услуги", 
    icon: Wrench,
    examples: "Автосервизи, адвокати, счетоводители",
    benefits: "+35% нови клиенти от Google"
  },
  { 
    id: "beauty", 
    name: "Красота & Здраве", 
    icon: Heart,
    examples: "Фризьори, козметика, клиники",
    benefits: "+50% онлайн резервации"
  }
];

export default function MiniSitesContent() {
  const [selectedCategory, setSelectedCategory] = useState("restaurants");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: '/campaigns/mini-sites',
        page_title: 'Mini-Sites Campaign'
      });
    }

    // Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const handleCTAClick = (type: 'primary' | 'secondary') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mini_hero_cta_click', {
        cta: type
      });
    }

    if (type === 'primary') {
      setShowForm(true);
      setTimeout(() => {
        document.getElementById('mini-sites-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuInteraction = (category: string, item?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mini_menu_interaction', {
        category,
        item: item || 'category_expand'
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        .mini-sites-page {
          --color-primary: #FF6B35;
          --color-primary-hover: #E65C2F;
          --color-secondary: #2E86AB;
          --color-bg: #FAFAFA;
          --color-card: #FFFFFF;
          --color-text: #1E1E1E;
          --color-subtext: #6B7280;
          --color-success: #22C55E;
          --color-error: #EF4444;
        }
      `}</style>

      {/* JSON-LD Structured Data */}
      <Script
        id="mini-sites-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Pravda ST Agency",
                "url": "https://pravdast.agency",
                "logo": "https://pravdast.agency/logo.png",
                "sameAs": [
                  "https://www.facebook.com/pravdastagency",
                  "https://www.linkedin.com/company/pravdast"
                ]
              },
              {
                "@type": "Service",
                "name": "Mini-Sites",
                "provider": {
                  "@type": "Organization",
                  "name": "Pravda ST Agency"
                },
                "description": "Готов one-page сайт с вградено меню, контакти и карта за малък бизнес",
                "areaServed": "BG",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Mini-Sites пакети",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "name": "Starter Pack",
                      "price": "299",
                      "priceCurrency": "BGN"
                    },
                    {
                      "@type": "Offer",
                      "name": "Maintenance",
                      "price": "49",
                      "priceCurrency": "BGN",
                      "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "49",
                        "priceCurrency": "BGN",
                        "billingIncrement": 1,
                        "billingDuration": "P1M"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Колко време отнема създаването на Mini-Site?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Под 24 часа при готово съдържание и меню. Обикновено сайтът е готов същия ден."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Мога ли сам да редактирам меню и цени?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Да, получавате достъп до прост панел за управление. Или просто ни изпращате промените и ние ги правим за вас."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="mini-sites-page bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
        {/* Minimal Top Bar */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl text-[var(--color-primary)]">Mini-Sites</div>
              <Button 
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-2xl"
                onClick={() => handleCTAClick('primary')}
              >
                Започни сега
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--color-bg)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text)]">
                Вашият бизнес онлайн за под 24 часа
              </h1>
              <p className="text-xl text-[var(--color-subtext)] mb-8">
                Готови Mini-Sites с меню, контакти и карта – оптимизирани за клиенти, не за суета.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-2xl px-8 py-6 text-lg"
                  onClick={() => handleCTAClick('primary')}
                >
                  Започни сега
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white rounded-2xl px-8 py-6 text-lg"
                  onClick={() => handleCTAClick('secondary')}
                >
                  Виж демо шаблони
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
              Защо губите клиенти всеки ден
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white border-gray-100">
                <AlertCircle className="w-12 h-12 text-[var(--color-error)] mb-4" />
                <h3 className="font-bold text-xl mb-2">Нямате сайт = губите клиенти</h3>
                <p className="text-[var(--color-subtext)]">
                  70% от хората проверяват Google преди да изберат къде да отидат. Без сайт, просто не съществувате за тях.
                </p>
              </Card>
              <Card className="p-6 bg-white border-gray-100">
                <Users className="w-12 h-12 text-[var(--color-secondary)] mb-4" />
                <h3 className="font-bold text-xl mb-2">Намират конкурента</h3>
                <p className="text-[var(--color-subtext)]">
                  Хората търсят меню и работно време. Когато не ги намерят при вас, отиват при този, който ги показва онлайн.
                </p>
              </Card>
              <Card className="p-6 bg-white border-gray-100">
                <Phone className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="font-bold text-xl mb-2">Губите време в обаждания</h3>
                <p className="text-[var(--color-subtext)]">
                  Телефонът звъни за базови въпроси - "Работите ли?", "Колко струва?". Това е време, което може да спестите.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-text)]">
              Готови решения за вашия бизнес
            </h2>
            <p className="text-center text-[var(--color-subtext)] mb-12">
              Изберете категорията и вижте как Mini-Site работи за вас
            </p>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto p-0">
                {businessCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-[var(--color-primary)] data-[state=active]:text-white bg-gray-50 p-4 rounded-xl"
                  >
                    <div className="text-center">
                      <cat.icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">{cat.name}</div>
                      <div className="text-xs opacity-80 mt-1">{cat.examples}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {businessCategories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-8">
                  <Card className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{cat.name}</h3>
                      <span className="text-[var(--color-success)] font-semibold">{cat.benefits}</span>
                    </div>
                    <p className="text-[var(--color-subtext)] mb-4">
                      Специализиран Mini-Site за: {cat.examples}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2">Какво включва:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center"><Check className="w-4 h-4 text-[var(--color-success)] mr-2" />Професионално меню с цени</li>
                          <li className="flex items-center"><Check className="w-4 h-4 text-[var(--color-success)] mr-2" />Google Maps интеграция</li>
                          <li className="flex items-center"><Check className="w-4 h-4 text-[var(--color-success)] mr-2" />Работно време (Отворено/Затворено)</li>
                          <li className="flex items-center"><Check className="w-4 h-4 text-[var(--color-success)] mr-2" />Директни линкове за обаждане</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Защо работи:</h4>
                        <p className="text-[var(--color-subtext)]">
                          Системен подход → предвидими резултати. Клиентите намират каквото търсят за секунди,
                          вместо да чакат на телефона или да питат в социални мрежи.
                        </p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
              Какво включва всеки Mini-Site
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-white">
                <Timer className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Mobile-first, скорост &lt;3s</h3>
                <p className="text-[var(--color-subtext)]">
                  Оптимизиран за мобилни устройства. Зарежда се светкавично, дори на бавен интернет.
                </p>
              </Card>
              <Card className="p-6 bg-white">
                <MenuIcon className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Вградено меню с цени</h3>
                <p className="text-[var(--color-subtext)]">
                  Категории → артикули → цени. Клиентите виждат всичко без да питат.
                </p>
              </Card>
              <Card className="p-6 bg-white">
                <MapPin className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Google Maps интеграция</h3>
                <p className="text-[var(--color-subtext)]">
                  Показва точното местоположение. Клиентите стигат без да се губят.
                </p>
              </Card>
              <Card className="p-6 bg-white">
                <Clock className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Работно време</h3>
                <p className="text-[var(--color-subtext)]">
                  Автоматично показва "Отворено" или "Затворено". Няма повече въпроси.
                </p>
              </Card>
              <Card className="p-6 bg-white">
                <Star className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Ревюта и доверие</h3>
                <p className="text-[var(--color-subtext)]">
                  Показва положителни отзиви. Социално доказателство = повече клиенти.
                </p>
              </Card>
              <Card className="p-6 bg-white">
                <Phone className="w-10 h-10 text-[var(--color-primary)] mb-3" />
                <h3 className="font-bold text-lg mb-2">Директни CTA бутони</h3>
                <p className="text-[var(--color-subtext)]">
                  "Резервирай", "Поръчай", "Обади се" - едно докосване и готово.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Menu Demo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-text)]">
              Вижте как изглежда менюто
            </h2>
            <p className="text-center text-[var(--color-subtext)] mb-12">
              Интерактивно демо - точно така ще виждат клиентите вашето меню
            </p>
            
            <Card className="p-6 bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Примерно меню</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                >
                  {isMenuExpanded ? 'Свий всичко' : 'Разгъни всичко'}
                </Button>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {demoMenu.map((category, idx) => (
                  <AccordionItem key={idx} value={`category-${idx}`}>
                    <AccordionTrigger 
                      className="text-lg font-semibold hover:text-[var(--color-primary)]"
                      onClick={() => handleMenuInteraction(category.name)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        {category.name}
                        <span className="text-sm text-[var(--color-subtext)] ml-2">
                          ({category.items.length} артикула)
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-4">
                        {category.items.map((item, itemIdx) => (
                          <div 
                            key={itemIdx} 
                            className="flex justify-between items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => handleMenuInteraction(category.name, item.name)}
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              {item.note && (
                                <p className="text-sm text-[var(--color-subtext)] mt-1">{item.note}</p>
                              )}
                            </div>
                            <div className="text-lg font-bold text-[var(--color-primary)]">
                              {item.price.toFixed(2)} лв
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
              Резултати от реални клиенти
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white text-center">
                <TrendingUp className="w-12 h-12 text-[var(--color-success)] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">+40%</div>
                <p className="font-semibold mb-1">повече поръчки</p>
                <p className="text-sm text-[var(--color-subtext)]">Пицария във Варна за 30 дни</p>
              </Card>
              <Card className="p-6 bg-white text-center">
                <Timer className="w-12 h-12 text-[var(--color-secondary)] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">-2 часа</div>
                <p className="font-semibold mb-1">по-малко обаждания</p>
                <p className="text-sm text-[var(--color-subtext)]">Кафене в София дневно</p>
              </Card>
              <Card className="p-6 bg-white text-center">
                <Users className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">+35%</div>
                <p className="font-semibold mb-1">нови клиенти</p>
                <p className="text-sm text-[var(--color-subtext)]">Автосервиз в Пловдив от Google</p>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-[var(--color-subtext)]">
                <strong>Защо работи:</strong> Клиентите намират информацията веднага → 
                вземат решение по-бързо → идват при вас вместо при конкурента.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
              Инвестиция, която се изплаща бързо
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-[var(--color-primary)]">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter Pack</h3>
                  <div className="text-4xl font-bold text-[var(--color-primary)]">299 лв</div>
                  <p className="text-[var(--color-subtext)]">еднократно</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    One-page Mini-Site
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    SEO оптимизация
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Меню до 50 позиции
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Google Maps интеграция
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Мобилна оптимизация
                  </li>
                </ul>
                <Button
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl py-6"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'mini_pricing_cta_click', { package: 'starter' });
                    }
                    setShowForm(true);
                    setTimeout(() => {
                      document.getElementById('mini-sites-form')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Поръчай Mini-Site
                </Button>
              </Card>
              
              <Card className="p-8 bg-gray-50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Maintenance</h3>
                  <div className="text-4xl font-bold text-[var(--color-secondary)]">49 лв</div>
                  <p className="text-[var(--color-subtext)]">на месец (по желание)</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Хостинг и домейн
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    SSL сертификат
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Обновяване на меню/цени
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Техническа поддръжка
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[var(--color-success)] mr-3 flex-shrink-0" />
                    Месечен отчет
                  </li>
                </ul>
                <Button
                  className="w-full border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white rounded-xl py-6"
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'mini_pricing_cta_click', { package: 'maintenance' });
                    }
                    setShowForm(true);
                    setTimeout(() => {
                      document.getElementById('mini-sites-form')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Добави поддръжка
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        {showForm && (
          <section id="mini-sites-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-text)]">
                Започнете с вашия Mini-Site
              </h2>
              <p className="text-center text-[var(--color-subtext)] mb-8">
                Попълнете формата и ще се свържем с вас до 2 часа
              </p>
              <Card className="p-6 bg-white">
                <MiniSitesForm />
              </Card>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
              Често задавани въпроси
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="time">
                <AccordionTrigger className="text-lg font-semibold">
                  Колко време отнема създаването на Mini-Site?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--color-subtext)]">
                    Под 24 часа при готово съдържание и меню. Обикновено сайтът е готов същия ден.
                    Нуждаем се само от вашето лого, снимки и информация за менюто.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="edit">
                <AccordionTrigger className="text-lg font-semibold">
                  Мога ли сам да редактирам меню и цени?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--color-subtext)]">
                    Да, получавате достъп до прост панел за управление, където можете да променяте цени,
                    добавяте нови продукти и актуализирате работно време. Или просто ни изпращате 
                    промените и ние ги правим за вас безплатно (при активна поддръжка).
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="facebook">
                <AccordionTrigger className="text-lg font-semibold">
                  Имам само Facebook страница - нужен ли ми е сайт?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--color-subtext)]">
                    Да! Facebook е добър за комуникация, но Mini-Site ви прави откриваеми в Google и Maps.
                    80% от хората търсят в Google преди да изберат къде да отидат. Без сайт, вие просто
                    не съществувате за тези потенциални клиенти.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hosting">
                <AccordionTrigger className="text-lg font-semibold">
                  Има ли хостинг и поддръжка?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--color-subtext)]">
                    По избор - 49 лв/месец включва хостинг, домейн, SSL сертификат, техническа поддръжка
                    и неограничени промени на съдържанието. Можете да започнете само със Starter Pack
                    и да добавите поддръжка по-късно.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-white to-[var(--color-bg)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text)]">
              Готови сте да сте видими онлайн до утре?
            </h2>
            <p className="text-xl text-[var(--color-subtext)] mb-8">
              Спрете да губите клиенти. Започнете да печелите повече.
            </p>
            <Button
              size="lg"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-2xl px-10 py-6 text-lg"
              onClick={() => {
                setShowForm(true);
                setTimeout(() => {
                  document.getElementById('mini-sites-form')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Започни сега
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
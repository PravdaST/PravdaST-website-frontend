# Pravda Agency - Next.js Website

🚀 Модерен уебсайт за Pravda Agency, построен с Next.js 14 и най-новите технологии.

## 🎯 Основни функции

- ⚡ **Next.js 14** с App Router
- 🎨 **Tailwind CSS** за стилизация
- 🚀 **Framer Motion** за анимации
- 📱 **Responsive дизайн** за всички устройства
- 🔍 **SEO оптимизиран** с meta tags и structured data
- 📊 **Google Analytics** интеграция
- 📧 **Klaviyo** email маркетинг
- 🎯 **TypeScript** за type safety

## 📦 Инсталация

```bash
# 1. Клонирайте проекта
git clone <repo-url>
cd pravda-nextjs-export

# 2. Инсталирайте зависимостите
npm install

# 3. Стартирайте development сървъра
npm run dev

# 4. Отворете браузъра на http://localhost:3000
```

## 🏗 Структура на проекта

```
src/
├── app/                    # Next.js App Router страници
│   ├── page.tsx           # Начална страница
│   ├── about/             # За нас
│   ├── blog/              # Блог система
│   ├── contact/           # Контакти
│   ├── services/          # Услуги
│   └── layout.tsx         # Основен layout
├── components/            # React компоненти
│   ├── sections/          # Секции от сайта
│   └── ui/               # UI компоненти
├── lib/                  # Utility функции
└── styles/               # CSS файлове
```

## 🎨 Основни компоненти

### Секции на началната страница:
- **Navigation** - Главно меню с dropdown
- **HeroSection** - Hero област с анимации
- **PartnersCarousel** - Карусел с партньори
- **ProblemSection** - Проблеми в маркетинга
- **SolutionSection** - Решения
- **ProcessSection** - 3-стъпков процес
- **SystemsSection** - 4 системи за растеж
- **CaseStudiesSlider** - Реални резултати
- **CTASection** - Call-to-action
- **Footer** - Долна част

## 🚀 Deployment

### Vercel (препоръчано)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=out
```

## 🔧 Конфигурация

### Environment Variables
Създайте `.env.local` файл:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
NEXT_PUBLIC_SITE_URL=https://www.pravdagency.eu
```

## 📱 Страници

- `/` - Начална страница
- `/about` - За нас
- `/services` - Услуги
- `/services/seo-struktor` - SEO Struktor™
- `/services/clickstarter` - Clickstarter™
- `/services/trendlab` - Trendlab™
- `/services/clientomat` - Clientomat™
- `/blog` - Блог
- `/contact` - Контакти
- `/case-studies` - Резултати
- `/calculators` - ROI калкулатори

## 🎯 SEO Оптимизация

- ✅ Meta tags за всички страници
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Schema.org structured data
- ✅ Canonical URLs
- ✅ XML sitemap
- ✅ robots.txt

## 📊 Analytics

- **Google Analytics 4** - Page views, events, conversions
- **Klaviyo** - Email маркетинг и lead tracking
- **Facebook Pixel** - Retargeting campaigns

## 🔒 Производителност

- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Compression
- ✅ Service Worker caching

## 👥 Екип

Проектът е разработен от Pravda Agency с фокус върху:
- Модерен дизайн
- Отлична производителност
- SEO оптимизация
- Лесна поддръжка

## 📞 Поддръжка

За въпроси и поддръжка:
- 📧 Email: contact@pravdagency.eu
- 📞 Телефон: +359 879 282 299
- 🌐 Website: https://www.pravdagency.eu
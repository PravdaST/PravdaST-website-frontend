# Pravda Agency - Next.js Export

Това е пълната Next.js версия на Pravda Agency уебсайт, готова за локална разработка и внедряване.

## 🚀 Бърз старт

### 1. Инсталиране на зависимости

```bash
# Отидете в папката на проекта
cd pravda-nextjs-export

# Направете скрипта изпълним (Mac/Linux)
chmod +x install-dependencies.sh

# Стартирайте автоматичната инсталация
./install-dependencies.sh
```

**За Windows:**
```bash
npm install
```

### 2. Стартиране на development сървър

```bash
npm run dev
```

Отворете [http://localhost:3000](http://localhost:3000) във вашия браузър.

### 3. Производствен build

```bash
npm run build
npm run start
```

## 📁 Структура на проекта

```
pravda-nextjs-export/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── services/           # Services pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── blog/               # Blog pages
│   │   └── case-studies/       # Case studies page
│   ├── components/             # React components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # UI components
│   ├── lib/                    # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript types
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── package.json               # Dependencies
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS config
└── tsconfig.json             # TypeScript config
```

## 🛠 Технологии

- **Framework:** Next.js 14 с App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **SEO:** React Helmet Async

## 🔧 Конфигурация

### Environment Variables

Създайте `.env.local` файл в root папката:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JQ8F0NZDX0

# Klaviyo
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz

# Contact Form (ако използвате)
NEXT_PUBLIC_CONTACT_FORM_URL=https://form.typeform.com/to/GXLaGY98
```

### Customization

1. **Brand Colors:** Редактирайте `src/styles/globals.css`
2. **Content:** Обновете съдържанието в компонентите
3. **SEO:** Настройте meta tags в layout.tsx и page файловете
4. **Analytics:** Добавете вашите tracking IDs

## 📈 SEO Функции

- ✅ Динамични meta tags
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## 🎨 Стилизиране

Проектът използва Tailwind CSS с custom brand colors:

```css
/* Brand Colors */
--pravdast-yellow: #ECB628;
--pravdast-dark: #1a1a1a;
```

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Responsive navigation
- ✅ Optimized touch interactions
- ✅ Progressive enhancement

## 🚢 Внедряване

### Vercel (Препоръчително)

1. Качете проекта в GitHub
2. Свържете с Vercel
3. Добавете environment variables
4. Deploy автоматично

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Environment variables от `.env.local`

### Other Platforms

Използвайте `npm run build` за статичен export в `out/` папката.

## 🔍 Тестване

```bash
# Lint проверка
npm run lint

# Type checking
npx tsc --noEmit

# Build тест
npm run build
```

## 📞 Поддръжка

За въпроси и поддръжка:
- Email: contact@pravdast.agency
- Телефон: +359 879 282 299

## 📄 Лиценз

Всички права запазени © 2025 Pravda Agency
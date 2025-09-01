
# Landing Page SOP Framework - Pravda ST Agency

## 📋 Overview
Този документ описва стандартния оперативен процес (SOP) за създаване на landing pages в Pravda ST Agency. Използва се за обучение на AI системи да генерират консистентни, високо-конвертиращи landing pages.

## 🎯 Цел на Landing Pages
Всяка landing page има една основна цел: **Lead Generation чрез персонализиран калкулатор или форма**.

## 🏗️ Техническа Архитектура

### Основни Технологии
- **Framework**: Next.js 14+ с App Router
- **Language**: TypeScript React (.tsx файлове)
- **Styling**: TailwindCSS с custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Shadcn/ui базирани компоненти

### Файлова Структура
```
src/app/campaigns/[campaign-name]/
├── page.tsx (основна страница)
├── metadata.ts (SEO метаданни)
├── components/ (специфични компоненти)
└── [demo-pages]/ (опционални демо страници)
```

## 🎨 Design System

### Цветова Палитра
- **Primary Brand**: `#ECB629` (златно-жълто)
- **Secondary**: `#22c55e` (зелено)
- **Background**: `black` с градиенти
- **Text**: `white`, `gray-300`, `gray-400`
- **Accent**: `red-500/15` за орбс

### Typography Patterns
```tsx
// Заглавия - винаги използваме PravdaHeading
import PravdaHeading from '@/components/typography/PravdaHeading'

<PravdaHeading as="h1" size="4xl" className="md:text-6xl">
  Основно заглавие
</PravdaHeading>

<PravdaHeading as="h2" size="2xl" className="md:text-3xl">
  Секционно заглавие
</PravdaHeading>
```

### Animation Patterns
```tsx
// Fade In анимации
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Scale On Hover
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>

// Stagger Children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
```

## 📑 Landing Page Структура

### 1. Hero Section
**Цел**: Мгновено завладяване на вниманието и обяснение на стойността

**Компоненти**:
- Compelling headline с болката на target audience
- Subtitle с конкретна стойност/benefit
- Trust elements (security badges, guarantees)
- Primary CTA button
- Background effects (orbs, gradients)

**Пример структура**:
```tsx
{
  title: "Къде да изпратим вашия [Product] за [Niche]?",
  subtitle: "Персонализирано решение за вашата конкретна ситуация",
  trustElements: [
    "💯 безплатно",
    "🔒 НИКОГА не споделяме информацията ви", 
    "📞 Обаждаме се САМО в удобно за вас време"
  ],
  cta: "Започни калкулатора"
}
```

### 2. Multi-Step Form
**Цел**: Постепенно събиране на данни за персонализация

**Step Flow**:
1. **Welcome Screen** - Trust building + CTA
2. **Personal Info** - Име (2+ символа)
3. **Business Info** - Име на бизнеса
4. **Location** - Град/регион
5. **Metrics 1** - Количествени данни (с предварително зададени опции + custom input)
6. **Metrics 2** - Финансови данни (с предварително зададени опции + custom input)
7. **Contact Info** - Email + телефон с валидация
8. **Thank You** - Потвърждение + какво ще получат

**Validation Rules**:
- Email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Bulgarian Phone: `/^(\+359|0)[0-9]{8,9}$/`
- Name: минимум 2 символа
- Numbers: positive integers с min/max ограничения

### 3. Trust Elements
**Гаранции във всяка форма**:
- Безплатно
- Никаква спам
- Бърза доставка (до 5 мин)
- Персонализиран анализ
- Конфиденциалност

## 🔧 Компонентна Архитектура

### Основни Компоненти
```tsx
// Form Component Pattern
interface FormData {
  name: string;
  businessName: string;
  location: string;
  metric1: string;
  metric2: string;
  email: string;
  phone: string;
}

// Step-by-step form с AnimatePresence
const steps = [
  // Array от step обекти
];

// Progress tracking
const [currentStep, setCurrentStep] = useState(0);
const [formData, setFormData] = useState<FormData>(initialState);
```

### UI Patterns
```tsx
// Buttons
<Button
  className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90"
  size="lg"
>

// Input Fields
<input
  className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
  autoFocus
/>

// Option Buttons
<button
  className={`w-full p-4 rounded-xl border text-left transition-all ${
    isSelected 
      ? "border-green-400 bg-green-400/10 text-green-400"
      : "border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50"
  }`}
>

// Trust Cards
<div className="bg-gray-900/50 border border-green-400/20 rounded-2xl p-6">
  <div className="grid md:grid-cols-3 gap-4">
    {trustElements.map(...)}
  </div>
</div>
```

## 📊 Data Collection Strategy

### Form Data Requirements
Всяка landing page трябва да събира:
1. **Лични данни**: Име, email, телефон
2. **Business Context**: Име на бизнеса, локация
3. **Niche-Specific Metrics**: 2-3 ключови показателя за индустрията
4. **Pain Points**: Индиректно чрез въпросите

### Predefined Options Strategy
За всеки metric въпрос:
- 4 предварително зададени опции (базирани на research)
- Custom input field за точни стойности
- Min/max validation за realistic ranges

### Submission Flow
```tsx
const submitToAirtable = async () => {
  // POST to /api/airtable/[campaign-name]
  // Include timestamp, всички form fields
  // Error handling с user-friendly съобщения
  // Success redirect to thank you step
};
```

## 🎭 Content & Messaging Framework

### Headline Формули
1. **Problem + Solution**: "Колко наистина плащате на [Platform]?"
2. **Benefit + Timeframe**: "Намалете [Cost] с [Percentage] за [Time]"
3. **Authority + Results**: "Помогнахме на [Number] [Business Type] да [Achievement]"

### Pain Point Articulation
- Започвай с индустрия-специфични проблеми
- Използвай конкретни числа и проценти
- Фокусирай се върху скрити разходи и пропуснати възможности

### Trust Building Elements
- Конкретни case studies с цифри
- "No spam" guarantees
- Време за доставка на резултатите
- Безплатност на услугата

## 📱 Responsive Design Patterns

### Breakpoint Strategy
- **Mobile First**: Основният дизайн за mobile
- **MD+**: Enhanced layout за desktop
- **Grid Adaptations**: 1 колона на mobile, 2-3 на desktop

### Animation Performance
- Намалени blur effects на mobile
- Conditional complex animations с `useMediaQuery`
- Optimized motion values за по-добра производителност

## 🔗 Integration Requirements

### API Endpoints
Всяка landing page трябва:
```tsx
// API route за form submission
/api/airtable/[campaign-name]/route.ts

// Expected payload structure
{
  name: string;
  business_name: string;
  location: string;
  [metric_fields]: string;
  email: string;
  phone: string;
  timestamp: string;
}
```

### External Services
- **Airtable**: Data collection и CRM
- **Email Service**: Automated follow-up (Klaviyo/Mailchimp)
- **Analytics**: Conversion tracking

## 📈 Conversion Optimization

### Form UX Best Practices
1. **Progressive Disclosure**: По един въпрос на екран
2. **Visual Progress**: Progress bar с стъпки
3. **Immediate Validation**: Real-time feedback
4. **Multiple Input Types**: Buttons + custom inputs
5. **Clear Error Messages**: Конкретни инструкции за корекция

### CTA Optimization
- **Primary CTA**: Gradient жълто-зелено, action-oriented text
- **Secondary CTA**: Outline style за navigation
- **Loading States**: Spinner + "Изпращане..." text
- **Success States**: Confirmation + next steps

## 🎨 Brand Consistency

### Visual Identity
- **Logo**: Pravda ST брандинг
- **Colors**: Строго спазване на brand guidelines  
- **Fonts**: Default system fonts за performance
- **Spacing**: Consistent padding/margins (4, 6, 8, 12 scale)

### Voice & Tone
- **Professional но approachable**
- **Конкретни цифри и факти**
- **Българска локализация**
- **No-pressure approach**

## 🚀 Performance Standards

### Loading Optimization
- **Images**: Next.js Image component с priority
- **Components**: Dynamic imports за non-critical sections
- **Animations**: 60fps target, optimized motion values
- **Bundle**: Code splitting по роути

### SEO Requirements
- Unique meta title/description
- Structured data markup
- Open Graph images
- Local SEO optimization за български пазар

## 📝 Content Creation Guidelines

### Research Phase
1. **Target Audience Analysis**: Demographics, pain points, language
2. **Competitor Research**: Какво правят другите в нишата
3. **Keyword Research**: SEO-friendly формулировки
4. **Metric Identification**: Ключови KPIs за индустрията

### Copy Structure
1. **Hook**: Проблем + цифра
2. **Value Proposition**: Какво ще получат
3. **Social Proof**: Case studies, testimonials
4. **Risk Reversal**: Guarantees, no-obligation
5. **Urgency**: Limited time, immediate delivery

## 🎯 Niche-Specific Adaptations

### Restaurant/Food Industry
- Metrics: Daily orders, avg order value, platforms used
- Pain Points: Commission fees, dependency, customer acquisition
- Solutions: Direct ordering, cost reduction, independence

### Service Businesses  
- Metrics: Monthly clients, avg project value, lead sources
- Pain Points: Client acquisition, pricing, competition
- Solutions: Lead generation, premium positioning, automation

### Retail/E-commerce
- Metrics: Monthly sales, avg basket, traffic sources
- Pain Points: Ad costs, conversion rates, customer retention
- Solutions: Conversion optimization, retention systems, profit boost

## 📊 Success Metrics

### Conversion Benchmarks
- **Form Start Rate**: >60% от посетители
- **Completion Rate**: >40% от form starts
- **Lead Quality**: >80% valid contact info
- **Follow-up Response**: >25% engagement rate

### A/B Testing Areas
1. Headlines и value propositions
2. CTA button copy и colors
3. Form step order
4. Trust elements placement
5. Predefined options vs custom inputs

## 🔄 Iteration Process

### Data Collection
- Heat mapping на form interactions
- Drop-off analysis по стъпки
- User feedback от submitted leads
- Conversion rate tracking

### Optimization Cycle
1. **Identify**: Bottlenecks в conversion funnel
2. **Hypothesize**: Potential improvements
3. **Test**: A/B тест на промените
4. **Implement**: Winning variants
5. **Monitor**: Continued performance tracking

---

## 🤖 AI Implementation Instructions

Когато създаваш нова landing page:

1. **Започни с niche research** - разбери target audience
2. **Използвай template structure** от този документ
3. **Адаптирай metrics въпросите** за конкретната индустрия  
4. **Запази brand consistency** - цветове, шрифтове, tone
5. **Имплементирай всички technical requirements** - validation, API, responsive design
6. **Тествай form flow** преди финализиране

**Key Files to Reference**:
- `src/components/glovo-step-form.tsx` - Main form component
- `src/app/campaigns/glovo/page.tsx` - Complete page structure
- `src/components/typography/PravdaHeading.tsx` - Heading component
- `src/components/ui/button.tsx` - Button styling

Този SOP осигурява консистентност и качество във всички landing pages на агенцията.

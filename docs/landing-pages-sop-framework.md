
# Landing Pages SOP Framework - Pravda ST Agency

## Обща Структура и Методики

### Технически Stack
- **Framework**: Next.js 15.5.0 с App Router (SSR)
- **Styling**: Tailwind CSS + Custom Design System
- **Component Architecture**: .tsx files (TypeScript React)
- **Animations**: Framer Motion
- **UI Library**: shadcn/ui (Radix UI primitives)
- **State Management**: React hooks
- **SEO**: Built-in Next.js SEO + Structured Data

### Landing Page Архитектура

#### 1. Hero Section Structure
```typescript
// Задължителни елементи:
- PravdaHeading (H1) с gradient text effect
- Value proposition subtitle
- CTA button с scroll functionality
- Background effects (animated orbs)
- Stats/metrics row
- Scroll indicator
```

#### 2. Problem/Solution Flow
```typescript
// Секции по ред:
1. Hero Section - Основна стойност
2. Problem Visualization - Визуализация на проблема
3. Solution Section - Нашето решение
4. Features Grid - Ключови функции
5. Social Proof/Testimonials - Доказателства
6. Pricing/Calculator - Ценоразпис или калкулатор
7. FAQ Section - Често задавани въпроси
8. Final CTA - Финален призив
```

#### 3. Design System Components

**Colors:**
- Primary Yellow: `#ECB628` (--pravdast-yellow)
- Dark Background: `#0D0D0F` (--pravdast-dark)
- Gradients: `from-yellow-400 to-green-400`

**Typography:**
- Headers: PravdaHeading component
- Body: PravdaText component
- Emphasis: Gradient text effects

**Effects:**
- Glassmorphism cards
- Animated background orbs
- Framer Motion animations
- Blur effects și backdrop filters

#### 4. Form Integration
```typescript
// Lead Generation Structure:
- Multi-step forms (3-5 steps max)
- Airtable integration за data storage
- Klaviyo integration за email marketing
- Progress indicators
- Validation с zod schema
```

#### 5. SEO Optimization
```typescript
// Required elements:
- Dynamic metadata generation
- Structured data (JSON-LD)
- OG images
- Meta descriptions
- Internal linking strategy
```

### Standard Components Template

#### Hero Section Template:
```typescript
export const LandingHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-white/80" />
      </div>
      
      {/* Animated Orbs */}
      <BackgroundEffects />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <PravdaHeading as="h1" size="4xl" className="mb-6">
          Headline с{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
            Gradient Effect
          </span>
        </PravdaHeading>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Value proposition description
        </p>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Stats items */}
        </div>
        
        {/* CTA */}
        <Button onClick={scrollToCalculator} className="bg-gradient-to-r from-yellow-400 to-green-400">
          Main CTA
        </Button>
      </div>
    </section>
  );
};
```

### Conversion Optimization Rules

1. **Above the fold clarity** - Ясна стойност за 3 секунди
2. **Single CTA focus** - Една основна цел на страница
3. **Social proof placement** - Testimonials в key positions
4. **Mobile-first design** - Responsive за всички устройства
5. **Speed optimization** - Lazy loading, optimized images
6. **A/B testing ready** - Feature flags за експерименти

### Content Guidelines

#### Headlines Formula:
- Проблем + Решение + Резултат
- Максимум 12 думи
- Включва emotional trigger
- Specific numbers където е възможно

#### CTA Copy:
- Action-oriented verbs
- Urgency/scarcity elements
- Value reinforcement
- "БЕЗПЛАТНО" keyword where applicable

### Files Structure
```
/campaigns/[niche]/
├── metadata.ts          # SEO metadata
├── page.tsx            # Main landing page
└── components/         # Niche-specific components
    ├── HeroSection.tsx
    ├── ProblemSection.tsx
    ├── SolutionSection.tsx
    ├── PricingCalculator.tsx
    └── LeadForm.tsx
```

### Analytics & Tracking
- Google Analytics events
- Klaviyo tracking
- Meta Pixel events
- Conversion funnel tracking
- A/B testing infrastructure

### Performance Targets
- Mobile Lighthouse Score: ≥90
- LCP: ≤2.5s
- INP: ≤200ms
- CLS: ≤0.05
- TTFB: ≤0.5s

## Usage Instructions pentru Custom Chat

Използвай този framework като база за създаване на landing pages за различни ниши. Всяка landing page трябва да следва тази структура, използвайки същите компоненти и дизайн patterns за consistency и performance.


# SOP: ROI Калкулатори - /calculators

## 1. ОБЩ ПРЕГЛЕД

**Цел:** Интерактивни калкулатори за изчисляване на ROI за всяка от 4-те системи на Pravda Agency
**URL:** `/calculators`
**Главен файл:** `src/app/calculators/CalculatorsClient.tsx`
**Навигация:** Използва основната Navigation компонент

## 2. СТРУКТУРА НА СТРАНИЦАТА

### 2.1 Hero Section
- **Заглавие:** "Изчислете точната печалба от всяка система"
- **Подзаглавие:** "Спрете да гадаете - започнете да планирате с реални числа"
- **Urgency indicator:** "Остават 3 места за 2025" (с анимиран червен индикатор)

### 2.2 Tabs System (Главна навигация между калкулаторите)
- **SEO Struktor™** (Target icon)
- **Trendlab™** (TrendingUp icon) 
- **Clickstarter™** (Zap icon)
- **Clientomat™** (Users icon)

## 3. КАЛКУЛАТОРНА ЛОГИКА

### 3.1 Структура на всеки калкулатор

**Input Section (Лява страна):**
- 3 числови полета (специфични за всяка система)
- 1 dropdown за индустрия
- Всички полета са задължителни за точни изчисления

**Results Section (Дясна страна):**
- Кръгов Score индикатор (0-100)
- ROI в проценти 
- Специфични метрики за системата
- Timeframe за постигане на резултатите

### 3.2 Специфики по системи:

**SEO Struktor™ (1980 лв/месец):**
- Input: Текущ трафик, Google позиция, брой ключови думи, индустрия
- Calculation: 340% traffic increase, 2.5% conversion rate
- Output: Нов трафик, нови лийдове, 3-6 месеца timeframe

**Trendlab™ (3450 лв/месец):**
- Input: Последователи, публикации/седмица, engagement rate, индустрия  
- Calculation: 450% followers increase, authority score
- Output: Нови последователи, месечни views, 2-4 месеца timeframe

**Clickstarter™ (1570 лв/месец):**
- Input: Рекламен бюджет, CPC, месечни конверсии, индустрия
- Calculation: 85% conversion increase, 25% CPC reduction
- Output: Нови конверсии, икономии от разходи, 1-3 месеца timeframe

**Clientomat™ (2890 лв/месец):**
- Input: Месечни клиенти, средна поръчка, repeat rate, индустрия
- Calculation: 180% repeat rate increase, 220% client value increase  
- Output: Нов repeat rate, нова client value, 2-5 месеца timeframe

## 4. ПРЕПОРЪЧИТЕЛНА СИСТЕМА

**Динамични препоръки базирани на входните данни:**

**SEO Struktor™:**
- Трафик < 5000 → "Органичен трафик"
- Позиция > 30 → "Подобрение на позиции" 
- Ключови думи < 15 → "Изследване на ключови думи"
- Score < 70 → "Технически оптимизация"

**Trendlab™:**
- Последователи < 10000 → "Изграждане на аудитория"
- Публикации < 5 → "Честота на съдържание"
- Engagement < 5% → "Стратегия за ангажираност"
- Score < 70 → "Изграждане на авторитет"

**Clickstarter™:**
- CPC > 3 лв → "Оптимизация на цена за клик"
- Конверсии < 100 → "Подобрение на конверсии"
- Бюджет > 10000 лв → "Ефективност на бюджета"
- Score < 70 → "Структура на кампании"

**Clientomat™:**
- Repeat rate < 30% → "Стратегия за задържане"
- AOV < 2000 лв → "Оптимизация на стойност на клиент"
- Клиенти < 100 → "Привличане на клиенти" 
- Score < 70 → "Автоматизация на управление"

## 5. CTA СЕКЦИЯ

**Заглавие:** "Готови ли сте да превърнете тези числа в резултати?"
**Benefits:**
- ✅ Безплатна консултация
- ✅ Без ангажименти  
- ✅ Отговор в 48 часа

**CTA Button:** "Кандидатствайте за диагностика"
**URL:** `https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu`

## 6. АНИМАЦИИ И UX

- **Framer Motion** за всички анимации
- **Score circle** се запълва прогресивно (2 секунди)
- **Input fields** с hover ефекти и focus states
- **Background patterns** с движещи се градиенти
- **Responsive design** за mobile и desktop

## 7. ТЕХНИЧЕСКИ ДЕТАЙЛИ

**State Management:**
- `useState` за inputs и results
- `useEffect` за real-time calculations
- `useMemo` за service-specific configurations

**Validation:**
- Всички полета са числови (parseFloat)
- Fallback към 0 при невалидни стойности
- Dynamic recommendations на база данните

**Performance:**
- Instant calculations без API calls
- Optimized re-renders with proper dependencies
- Lazy loading на компоненти

## 8. ПОДДРЪЖКА И АКТУАЛИЗАЦИЯ

**За промяна на цени:** Редактирайте `monthlyPrice` в services array
**За нови препоръчки:** Добавете в switch statements в `calculateResults()`
**За нови метрики:** Модифицирайте calculation logic в съответната система
**За промяна на timeframes:** Обновете `timeframe` полето в резултатите

Този SOP обхваща пълната функционалност на калкулаторите и служи като референция за поддръжка и бъдещи подобрения.

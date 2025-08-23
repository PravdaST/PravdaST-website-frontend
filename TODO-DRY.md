# TODO-DRY.md - Систематична DRY Оптимизация

> **ВАЖНО: Запазваме 100% същия дизайн и съдържание - само централизираме повтарящия се код!**

## 📊 **Прогрес:**
- [x] ✅ GlassCard компонент (създаден и тестван в not-found.tsx)
- [ ] Button Patterns 
- [ ] Motion/Animation Components
- [ ] Hero Section Patterns
- [ ] Background Effects
- [ ] Form Elements
- [ ] CTA Sections

---

## 🥇 **P0 - High Impact Easy Wins**

### 1. ✅ Glassmorphism Cards - ЗАПОЧНАТ
**Status:** 🟡 Частично завършен
**Спестен код:** ~150-200 реда
**Файлове:** 20+ файла

**Създаден компонент:** `src/components/ui/GlassCard.tsx`
- [x] Основен компонент създаден
- [x] Тестван в not-found.tsx (2 замени)
- [ ] Приложи във всички останали файлове

**Останали файлове за замяна:**
- [ ] src/components/navigation.tsx (dropdown меню)
- [ ] src/app/campaigns/CampaignsClient.tsx (service cards)
- [ ] src/app/services/page.tsx (feature cards)
- [ ] src/components/glovo-hero-section.tsx (stat cards)
- [ ] src/components/process-section.tsx (step cards)
- [ ] src/app/about/AboutClient.tsx (team cards)
- [ ] src/components/case-studies-new.tsx (case study cards)

---

### 2. 🎯 Button Patterns - СЛЕДВАЩ
**Status:** ⏳ Не е започнат
**Спестен код:** ~300-400 реда  
**Файлове:** 23 файла
**Pattern:** `bg-[#ECB629] text-black hover:bg-[#ECB629]/90`

**Нужен компонент:** `src/components/ui/PravdaButton.tsx`

**Button варианти намерени:**
1. **Primary Yellow:** `bg-[#ECB629] text-black hover:bg-[#ECB629]/90`
2. **Outline:** `border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black`
3. **Secondary:** `bg-gradient-to-r from-yellow-400 to-green-400`
4. **Ghost:** `text-white hover:text-[#ECB629]`

**Файлове за замяна:**
- [ ] src/app/not-found.tsx
- [ ] src/components/nav/NavButton.tsx (вече създаден, може merge)
- [ ] src/app/contact/ContactClient.tsx
- [ ] src/components/complete-homepage.tsx
- [ ] src/components/simple-home.tsx
- [ ] src/components/static-homepage.tsx
- [ ] src/app/campaigns/CampaignsClient.tsx
- [ ] src/components/static-hero.tsx
- [ ] src/components/cta-section.tsx
- [ ] src/components/hero-optimized.tsx
- [ ] src/components/systems-section.tsx
- [ ] src/components/case-studies-new.tsx
- [ ] src/components/client-homepage.tsx
- [ ] src/app/blog/BlogClient.tsx
- [ ] src/components/personalization.tsx
- [ ] src/app/services/page.tsx
- [ ] src/components/related-posts.tsx
- [ ] src/app/blog/wp-[slug]/WordPressPostClient.tsx
- [ ] src/app/about/AboutClient.tsx
- [ ] src/app/services/trendlab/page.tsx
- [ ] src/app/services/seo-struktor/page.tsx
- [ ] src/app/services/clientomat/page.tsx
- [ ] src/app/services/clickstarter/page.tsx

---

### 3. ⚡ Motion/Animation Patterns
**Status:** ⏳ Не е започнат
**Спестен код:** ~250-300 реда
**Файлове:** Всички компоненти

**Нужни компоненти:**
- [x] `src/components/motion/FadeIn.tsx` (вече създаден)
- [x] `src/components/motion/FadeInView.tsx` (вече създаден)
- [ ] `src/components/motion/ScaleOnHover.tsx` - НОВ
- [ ] `src/components/motion/SlideIn.tsx` - НОВ

**Повтарящи се patterns:**
1. **Hover Scale:** `whileHover={{ scale: 1.05 }}` - 15+ файла
2. **Fade In:** `initial={{ opacity: 0, y: 20 }}` - 25+ файла
3. **Card Hover:** `whileHover={{ x: 4, scale: 1.02 }}` - 10+ файла

**Файлове за refactor:**
- [ ] src/components/navigation.tsx (dropdown items)
- [ ] src/app/services/trendlab/page.tsx
- [ ] src/app/services/clickstarter/page.tsx
- [ ] src/app/privacy/PrivacyClient.tsx
- [ ] src/app/about/AboutClient.tsx
- [ ] И още 15+ файла

---

## 🥈 **P1 - Medium Impact**

### 4. 🏠 Hero Section Patterns
**Status:** ⏳ Не е започнат
**Спестен код:** ~200-250 реда
**Файлове:** 5-8 hero компоненти

**Нужен компонент:** `src/components/ui/HeroSection.tsx`

**Hero patterns намерени:**
1. **Status Badge** с `border border-slate-700/50 backdrop-blur-sm`
2. **Gradient Headlines** с `bg-gradient-to-r from-[#ECB629] to-yellow-300`
3. **CTA Button Pairs** с primary + secondary layout
4. **Background Grid Patterns**

**Файлове за refactor:**
- [ ] src/components/simple-home.tsx
- [ ] src/components/hero-optimized.tsx
- [ ] src/components/static-hero.tsx
- [ ] src/components/hero-section.tsx
- [ ] src/app/services/*/page.tsx файлове

---

### 5. 🎨 Background Effects
**Status:** ⏳ Не е започнат  
**Спестен код:** ~150-200 реда
**Файлове:** 10+ компоненти

**Нужни компоненти:**
- [ ] `src/components/ui/GridPattern.tsx`
- [ ] `src/components/ui/FloatingOrb.tsx`

**Background patterns:**
1. **Grid Pattern:** `linear-gradient` със backgroundSize: '40px 40px'
2. **Floating Orbs:** motion.div с radial-gradient и animate
3. **Overlay Effects:** `absolute inset-0 opacity-15`

**Файлове за refactor:**
- [ ] src/components/background-effects.tsx (5+ orb patterns)
- [ ] src/components/static-hero.tsx
- [ ] src/app/services/page.tsx  
- [ ] src/components/problem-section.tsx
- [ ] src/components/solution-section.tsx

---

### 6. 📝 Form Elements  
**Status:** ⏳ Не е започнат
**Спестен код:** ~100-150 реда
**Файлове:** 13 файла

**Нужни компоненти:**
- [ ] `src/components/ui/FormSection.tsx`
- [ ] `src/components/ui/InputGroup.tsx`

**Form patterns:**
1. **Form Layout:** `flex items-center gap px py font`
2. **Input Styling:** consistent border, focus states
3. **Error States:** validation styling patterns

**Файлове за refactor:**
- [ ] src/components/navigation.tsx
- [ ] src/app/terms/TermsClient.tsx
- [ ] src/components/cta-section.tsx
- [ ] src/components/process-section.tsx
- [ ] src/components/footer.tsx
- [ ] src/app/faq/FAQClient.tsx
- [ ] И още 7+ файла

---

## 🥉 **P2 - Lower Priority (ако има време)**

### 7. 📱 Card Components
**Status:** ⏳ Не е започнат
**Спестен код:** ~100 реда

**Нужни компоненти:**
- [ ] `src/components/ui/FeatureCard.tsx`
- [ ] `src/components/ui/ServiceCard.tsx`

### 8. 🎯 CTA Sections
**Status:** ⏳ Не е започнат  
**Спестен код:** ~80-100 реда

**Нужен компонент:**
- [ ] `src/components/ui/CTASection.tsx`

---

## 📋 **Implementation Strategy**

### **Етап 1: Завърши GlassCard**
1. [ ] Приложи GlassCard във всички 18+ файла
2. [ ] Тествай всяка замяна за visual consistency
3. [ ] Commit changes

### **Етап 2: Button Patterns** 
1. [ ] Създай PravdaButton компонент
2. [ ] Merge с NavButton
3. [ ] Замени във всички 23 файла
4. [ ] Тествай hover ефекти

### **Етап 3: Motion Components**
1. [ ] Създай ScaleOnHover, SlideIn компоненти  
2. [ ] Refactor animation patterns
3. [ ] Тествай performance

### **Етап 4: Hero & Background**
1. [ ] HeroSection компонент
2. [ ] GridPattern & FloatingOrb
3. [ ] Background refactoring

### **Етап 5: Forms & Cards**
1. [ ] Form компоненти
2. [ ] Card компоненти
3. [ ] Final testing

---

## 🎯 **Успех Критерии:**

✅ **Визуално:** 100% същия дизайн и UX
✅ **Functional:** Всички hover ефекти работят  
✅ **Performance:** Няма регресия
✅ **Maintainability:** 60-70% по-малко дублиран код
✅ **Type Safety:** TypeScript без грешки

---

## 📊 **Очаквани Резултати:**

- **Спестен код:** ~1000-1200 реда
- **Maintainability:** 70% по-добра  
- **Consistency:** 100% еднакви ефекти
- **Reusability:** Компоненти за бъдещи проекти
- **Developer Experience:** По-лесно добавяне на нови секции

**Следващо действие:** Започваме с Button Patterns! 🚀
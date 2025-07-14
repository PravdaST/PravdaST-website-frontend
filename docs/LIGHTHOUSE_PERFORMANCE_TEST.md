# Lighthouse Performance Test Instructions

## 🚀 Как да направиш Lighthouse audit

### 1. Chrome DevTools метод:
```bash
1. Отвори Chrome
2. Отиди на http://localhost:5000
3. F12 → Lighthouse tab
4. Generate report за Performance, Accessibility, Best Practices, SEO
```

### 2. CLI метод:
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit на key pages
lighthouse http://localhost:5000 --output json --output html --output-path ./lighthouse-home
lighthouse http://localhost:5000/services --output json --output html --output-path ./lighthouse-services
lighthouse http://localhost:5000/contact --output json --output html --output-path ./lighthouse-contact
```

### 3. Expected Lighthouse Scores:

#### Performance: 90+
- ✅ Next.js optimizations
- ✅ Image optimization с next/image
- ✅ Code splitting автоматично
- ✅ CSS minification

#### Accessibility: 95+
- ✅ Semantic HTML structure
- ✅ Alt tags за images
- ✅ ARIA labels където необходимо
- ✅ Keyboard navigation support

#### Best Practices: 95+
- ✅ HTTPS (в production)
- ✅ Security headers
- ✅ No mixed content
- ✅ Secure libraries

#### SEO: 100
- ✅ Unique titles и descriptions
- ✅ Meta viewport tag
- ✅ Structured data
- ✅ Internal linking
- ✅ Robots.txt
- ✅ Sitemap.xml

## 🔧 Common Performance Issues to Check:

### JavaScript Bundle Size:
```bash
# Run bundle analyzer
npm run analyze
```

### Image Optimization:
- Всички images трябва да използват next/Image
- WebP format когато е възможно
- Правилни размери и responsive images

### CSS Optimization:
- Критичен CSS inline
- Unused CSS премахнат
- CSS минифициран

### Third-party Scripts:
- Google Analytics optimized loading
- Klaviyo script async
- Meta Pixel conditional loading

## 📊 Performance Monitoring

В production използвай:
- Vercel Speed Insights (вече интегриран)
- Google PageSpeed Insights
- GTmetrix за допълнителен анализ

## 🎯 Target Metrics:

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s  
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
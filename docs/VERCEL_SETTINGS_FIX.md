# Vercel Settings Fix - Build Command Problem

## Проблем
Vercel използва грешни build settings и търси `vite build` вместо `next build`.

## Решение: Променете Vercel Project Settings

### 1. В Vercel Dashboard:
1. **Отидете в проекта** - PravdaST-website-frontend
2. **Settings** → **General** → **Build & Output Settings**
3. **Override настройките:**

### 2. Правилни Build Settings:
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### 3. Или в Root Directory Settings:
```
Root Directory: ./
```

### 4. Redeploy:
- **Deployments** → **Redeploy** latest deployment
- Или push нов commit в GitHub

## Алтернативно: Използвайте vercel.json

Създайте файл `vercel.json` в root с:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "framework": "nextjs"
}
```

## Проверете дали package.json има:
```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "next start"
  }
}
```

## Expected Build Log:
```
✓ Installing dependencies (npm install)
✓ Building Next.js application (npm run build)
✓ Optimizing pages and static assets
✓ Deployment successful
```

Проблемът е в Vercel settings, не в кода!
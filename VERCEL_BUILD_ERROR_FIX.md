# Vercel Build Error Fix - "vite: command not found"

## Проблем
Vercel все още търси `vite build` команда, което означава че старите React/Vite файлове все още са в repository-то.

## Решение: Заменете файловете в GitHub

### Проверете какво има в repository-то:
Отидете в https://github.com/PravdaST/PravdaST-website-frontend и проверете дали виждате:

❌ **Стари файлове (трябва да се изтрият):**
- `vite.config.js` 
- `index.html`
- `src/main.jsx`
- `package.json` с `"vite"` scripts

✅ **Нови файлове (трябва да са там):**
- `next.config.js`
- `src/app/` структура
- `package.json` с `"next"` scripts

### Стъпки за корекция:

1. **Изтрийте ВСИЧКИ файлове** в repository-то
2. **Upload новите Next.js файлове** от workspace:
   - `package.json` (с Next.js scripts)
   - `next.config.js`
   - `src/app/` папка
   - `public/` папка
   - `server/` папка
   - `shared/` папка
   - `tailwind.config.ts`
   - `tsconfig.json`
   - `vercel.json`

### Правилен package.json трябва да съдържа:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "15.3.5",
    "react": "^18.2.0"
  }
}
```

### След правилния upload, Vercel ще покаже:
```
✓ Cloning repository
✓ Installing dependencies (npm install)
✓ Building Next.js application (npm run build)
✓ Deployment successful
```

**Важно:** Трябва да замените ВСИЧКИ файлове, не само да добавите нови.
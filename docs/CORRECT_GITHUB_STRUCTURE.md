# Правилна GitHub структура

## ❌ ГРЕШНО (файлове в подпапка):
```
pravdast-nextjs-final/
└── pravda-final-nextjs/
    ├── package.json
    ├── src/
    ├── public/
    └── ...
```

## ✅ ПРАВИЛНО (файлове в root):
```
pravdast-nextjs-final/
├── package.json
├── next.config.js
├── src/
├── public/
├── server/
├── shared/
└── ...
```

## Как да коригирате:

### Метод 1: Upload само съдържанието
1. **В GitHub:** Отидете в `pravdast-nextjs-final`
2. **Upload файлове:** Селектирайте само файловете ВЪТРЕ в `pravda-final-nextjs/`
3. **НЕ upload-вайте:** самата папка `pravda-final-nextjs`

### Метод 2: Replit file browser
1. **Отворете:** `pravda-final-nextjs/` папката
2. **Селектирайте:** Ctrl+A (всички файлове вътре)
3. **Drag & drop:** Директно в GitHub root

### Файлове за root upload:
- `package.json` (direktno v root)
- `next.config.js` (direktno v root)
- `src/` papka (direktno v root)
- `public/` papka (direktno v root)
- `server/` papka (direktno v root)
- `shared/` papka (direktno v root)

## Vercel ще търси:
- `package.json` в root
- `next.config.js` в root
- `src/app/` структура

## Ако файловете са в подпапка, Vercel ще даде грешка!

**Решение:** Upload само съдържанието на `pravda-final-nextjs/` без самата папка.
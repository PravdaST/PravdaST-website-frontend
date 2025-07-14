# GitHub Root Upload - Правилна структура

## В GitHub repository трябва да изглежда така:

```
pravdast-nextjs-final/
├── package.json          ← Директно в root
├── next.config.js        ← Директно в root  
├── tailwind.config.ts    ← Директно в root
├── tsconfig.json         ← Директно в root
├── src/                  ← Папка директно в root
│   ├── app/
│   ├── components/
│   └── ...
├── public/               ← Папка директно в root
│   ├── favicon.ico
│   ├── robots.txt
│   └── ...
├── server/               ← Папка директно в root
├── shared/               ← Папка директно в root
└── README.md            ← Директно в root
```

## Как да upload-нете правилно:

1. **Отидете в GitHub:** https://github.com/PravdaST/pravdast-nextjs-final
2. **Кликнете:** "Add file" → "Upload files"
3. **От Replit:** Отворете папка `pravda-final-nextjs/`
4. **Селектирайте всички файлове ВЪТРЕ в папката:**
   - Всички `.json`, `.js`, `.ts` файлове
   - Всички папки (`src/`, `public/`, `server/`, `shared/`)
5. **Drag & drop директно в GitHub upload зоната**

## НЕ upload-вайте:
- Самата папка `pravda-final-nextjs/` ❌
- `.env.local` ❌
- `node_modules/` ❌
- `.next/` ❌

## Vercel очаква:
- `package.json` в root на repository
- `next.config.js` в root на repository
- `src/app/` структура в root

Ако файловете са в подпапка, Vercel няма да може да ги намери и deployment-ът ще се провали.
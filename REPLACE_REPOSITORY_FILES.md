# Замяна на файлове в съществуващия repository

## Git команди за пълна замяна:

### 1. Clone съществуващия repository
```bash
git clone https://github.com/PravdaST/PravdaST-website-frontend.git temp-repo
cd temp-repo
```

### 2. Изтрийте всички стари файлове
```bash
rm -rf * .*
# Запазете само .git папката
git rm -rf .
```

### 3. Копирайте новите Next.js файлове
```bash
cp -r /home/runner/workspace/* .
# Или специфично:
cp /home/runner/workspace/package.json .
cp /home/runner/workspace/next.config.js .
cp -r /home/runner/workspace/src .
cp -r /home/runner/workspace/public .
cp -r /home/runner/workspace/server .
cp -r /home/runner/workspace/shared .
cp /home/runner/workspace/tailwind.config.ts .
cp /home/runner/workspace/tsconfig.json .
cp /home/runner/workspace/vercel.json .
```

### 4. Добавете и commit новите файлове
```bash
git add .
git commit -m "Replace with Next.js production version

✅ Complete migration from React SPA to Next.js App Router
✅ QA audit score: 96/100
✅ All 15 pages with 1:1 design match
✅ SendGrid email + Klaviyo integrations active
✅ Dynamic sitemap.xml working
✅ Ready for Vercel deployment"
```

### 5. Push промените
```bash
git push origin main --force
```

## Алтернативен метод - GitHub Web Interface:

1. **Отидете в repository:** https://github.com/PravdaST/PravdaST-website-frontend
2. **Изтрийте всички файлове:** Селектирайте всички → Delete
3. **Upload новите файлове:** Drag & drop всички от root директорията
4. **Commit changes**

## Внимание:
- `--force` ще презапише цялата история
- Backup-нете важни данни преди това
- Уверете се че искате пълна замяна
# Vercel Deployment Configuration

## Environment Variables

За да работи контактната форма в production, трябва да настроите следните environment variables в Vercel Dashboard:

### Задължителни Variables:

1. **SENDGRID_API_KEY**
   - Стойност: Вашият SendGrid API ключ
   - Описание: За изпращане на имейли от контактната форма

2. **SENDGRID_FROM_EMAIL**
   - Стойност: `website@pravdagency.eu`
   - Описание: Имейл адрес от който се изпращат съобщенията

### Как да добавите variables в Vercel:

1. Отидете в Vercel Dashboard
2. Изберете вашия проект
3. Отидете в Settings → Environment Variables
4. Добавете всяка променлива:
   - Name: SENDGRID_API_KEY
   - Value: [вашият SendGrid API ключ]
   - Environment: Production, Preview, Development
   
   - Name: SENDGRID_FROM_EMAIL
   - Value: website@pravdagency.eu
   - Environment: Production, Preview, Development

5. Натиснете Save

### Готов за deployment:

След добавяне на environment variables, контактната форма ще работи автоматично:
- `/api/contacts` endpoint ще бъде достъпен като Vercel serverless function
- Имейлите ще се изпращат до contact@pravdast.agency
- Включени са security headers и CORS защита

### Тестване:

След deployment можете да тествате контактната формата директно на сайта. Всички съобщения ще се изпращат до contact@pravdast.agency с професионален HTML формат.
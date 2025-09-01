# Airtable Полета за Креативи Калкулатор

## База данни информация
- Base ID: `appkwDzbKRNTf1WZV` 
- Table ID: `tbl8OOQkbiArX7znY`
- Линк: https://airtable.com/appkwDzbKRNTf1WZV/tbl8OOQkbiArX7znY/viwY3bqIeQUz6fVUu?blocks=hide

## Необходими полета в Airtable таблицата

**ВАЖНО:** Полетата трябва да се казват ТОЧНО както са изписани тук (case-sensitive):

### Основни полета (Required)
1. **name** - Single line text
   - Име на клиента 

2. **business_name** - Single line text
   - Име на бизнеса

3. **industry** - Single select
   - Опции: ecommerce, services, restaurant, beauty, fitness, real-estate, education, other
   - Индустрия на бизнеса

4. **current_marketing** - Single select
   - Опции: facebook-ads, google-ads, social-media, none, other
   - Текущ маркетинг метод

5. **monthly_budget** - Number
   - Месечен маркетингов бюджет в лева

6. **main_goal** - Single select
   - Опции: increase-sales, brand-awareness, lead-generation, customer-engagement
   - Основна цел с креативите

7. **email** - Email
   - Имейл за контакт

8. **phone** - Phone number
   - Телефон за контакт

### Системни полета (Auto-generated)
9. **timestamp** - Date and time
   - Автоматично време на подаване

10. **Status** - Single select
    - Опции: New, Contacted, In Progress, Completed, Lost
    - Статус на заявката

11. **Source** - Single line text
    - Автоматично: "Creatives Calculator"
    - Източник на заявката

### Допълнителни полета за анализ (Опционални)
12. **Estimated Value** - Currency
    - Оценъчна стойност на клиента

13. **Priority** - Single select
    - Опции: High, Medium, Low
    - Приоритет за обработка

14. **Notes** - Long text
    - Бележки от екипа

15. **Follow Up Date** - Date
    - Дата за следващ контакт

16. **Assigned To** - Single select (User)
    - Отговорен служител

## Настройки на полетата

### Industry опции:
```
- ecommerce → E-commerce / Онлайн магазин
- services → Услуги (консултиране, агенция, и др.)
- restaurant → Ресторант / Хранителни заведения
- beauty → Козметика / Красота
- fitness → Фитнес / Здраве
- real-estate → Недвижими имоти
- education → Образование / Курсове
- other → Друга индустрия
```

### Current Marketing опции:
```
- facebook-ads → Facebook/Instagram реклами
- google-ads → Google реклами
- social-media → Органични социални медии
- none → Нямаме активен маркетинг
- [custom text] → Друго (custom input)
```

### Main Goal опции:
```
- increase-sales → Увеличение на продажбите
- brand-awareness → Повишаване на познаваемостта на бранда
- lead-generation → Генериране на повече запитвания
- customer-engagement → По-добра ангажираност с клиентите
```

### Status опции:
```
- New → Нова заявка
- Contacted → Свързахме се
- In Progress → В процес на работа
- Completed → Завършено
- Lost → Изгубена заявка
```

## API Интеграция

Формулярът изпраща данните до endpoint:
`/api/airtable/creatives-calculator`

Формат на данните:
```json
{
  "name": "string",
  "business_name": "string", 
  "industry": "string",
  "current_marketing": "string",
  "monthly_budget": "string",
  "main_goal": "string",
  "email": "string",
  "phone": "string",
  "timestamp": "2025-01-01T12:00:00.000Z"
}
```

## Настройки за автоматизации (Препоръки)

1. **Email уведомление** при нова заявка
2. **Slack уведомление** за high-priority заявки
3. **Auto-assign** базирано на индустрия
4. **Follow-up reminder** след 3 дни без контакт
5. **Lead scoring** базирано на бюджет и индустрия

## Workflow

1. Клиент попълва формуляра на `/campaigns/creatives`
2. Данните се записват в Airtable с Status: "New"
3. Екипът получава уведомление
4. Агентът обработва заявката и променя статуса
5. Проследяване до завършване на проекта
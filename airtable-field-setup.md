# Airtable Field Setup Instructions

## 🔍 ПРОБЛЕМ НАМЕРЕН: Липсват полетата в Airtable таблицата

### Текущо състояние:
- ✅ Връзката с Airtable работи
- ❌ В таблицата има само поле "Created " 
- ❌ Липсват всички необходими полета за данните

### 🛠️ ЗА ОТСТРАНЯВАНЕ НА ПРОБЛЕМА:

1. **Отворете вашата Airtable таблица:**
   ```
   https://airtable.com/appkwDzbKRNTf1WZV/tblofYDOCTS2PHwBP
   ```

2. **Добавете следните полета (ТОЧНО с тези имена):**
   
   | Име на поле | Тип | Описание |
   |-------------|-----|----------|
   | `Restaurant Name` | Single line text | Името на ресторанта |
   | `Daily Orders` | Single line text | Брой поръчки на ден (5-10, 11-20, etc.) |
   | `Average Order Value` | Single line text | Средна стойност на поръчка |
   | `Email` | Single line text | Имейл адрес |
   | `Phone` | Single line text | Телефонен номер |
   | `Timestamp` | Single line text | Дата и час на подаване |

3. **Как да добавите полета:**
   - Кликнете на "+" до последната колона
   - Изберете "Single line text" за тип
   - Въведете точното име от таблицата по-горе
   - Повторете за всички полета

### 💡 ВРЕМЕННО РЕШЕНИЕ:
- Засега данните се записват в полето "Created " като един текст
- След като добавите полетата, ще работи нормално

### 🎯 СЛЕДВАЩИ СТЪПКИ:
1. Добавете полетата в Airtable
2. Тествайте формата отново
3. Данните ще се записват в отделните колони

### 📋 ПРОВЕРКА:
След добавяне на полетата, в логовете трябва да видите:
```
Available fields from existing records: ['Restaurant Name', 'Daily Orders', 'Average Order Value', 'Email', 'Phone', 'Timestamp', 'Created ']
```
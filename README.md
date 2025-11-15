# Stockhub Server

Серверная часть системы управления складом Stockhub.

## Требования

- Node.js 18+ 
- PostgreSQL 14+
- npm или yarn

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Настройте базу данных:
   - Создайте базу данных PostgreSQL
   - Скопируйте `.env.example` в `.env` (если есть) или создайте `.env` файл
   - Укажите строку подключения к БД в переменной `DATABASE_URL`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/stockhub"
   ```

3. Примените миграции базы данных:
```bash
npx prisma migrate dev
```

4. Сгенерируйте Prisma Client:
```bash
npx prisma generate
```

## Запуск

### Режим разработки
```bash
npm run start:dev
```

Сервер запустится на порту 4000 (или на порту, указанном в переменной окружения `PORT`).

### Продакшн режим
```bash
npm run build
npm run start:prod
```

## Переменные окружения

Создайте файл `.env` в корне проекта со следующими переменными:

```
DATABASE_URL="postgresql://user:password@localhost:5432/stockhub"
PORT=3000
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_REFRESH_EXPIRES_IN="7d"
SESSION_SECRET="your-session-secret"
REDIS_HOST=localhost
REDIS_PORT=6379
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your-email@example.com
MAIL_PASS=your-password
MAIL_FROM=noreply@example.com
```

## Структура проекта

```
src/
  ├── auth/          # Модуль аутентификации
  ├── user/          # Модуль пользователей
  ├── organization/  # Модуль организаций
  ├── warehouse/     # Модуль складов
  ├── document/      # Модуль документов (приемка/отгрузка)
  ├── nomenclature/  # Модуль номенклатур
  ├── prisma/        # Prisma сервис
  └── libs/          # Общие библиотеки
```

## API Документация

Подробная документация по API находится в файле `API_DOCUMENTATION.md`.

## Полезные команды

```bash
# Сборка проекта
npm run build

# Запуск линтера
npm run lint

# Форматирование кода
npm run format

# Применение миграций
npx prisma migrate dev

# Просмотр базы данных в Prisma Studio
npx prisma studio
```


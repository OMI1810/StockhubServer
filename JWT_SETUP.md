# Настройка JWT для мобильного приложения

## Переменные окружения

Добавьте в ваш `.env` файл:

```env
# JWT Secret для подписи токенов
# ВАЖНО: Используйте длинный случайный ключ (минимум 32 символа)
# Для генерации можно использовать: openssl rand -base64 32
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long

# Остальные переменные уже должны быть настроены:
# REDIS_URL или REDIS_HOST, REDIS_PORT, REDIS_PASSWORD
# SESSION_SECRET
# и т.д.
```

## Генерация JWT_SECRET

Для генерации безопасного секретного ключа:

```bash
# Linux/Mac
openssl rand -base64 32

# Windows (PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

## Проверка работы

После добавления переменных окружения перезапустите приложение.

Эндпоинты для мобильного приложения:
- `POST /auth/mobile/login` - логин с получением токенов
- `POST /auth/mobile/refresh` - обновление Access Token
- `POST /auth/mobile/logout` - выход (удаление Refresh Token)
- `POST /auth/mobile/register` - регистрация

## Важно

- `JWT_SECRET` должен быть уникальным и секретным
- Не коммитьте `.env` файл в репозиторий
- В production используйте переменные окружения сервера, а не файл `.env`


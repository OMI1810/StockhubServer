# Логика работы мобильного приложения с JWT аутентификацией

## 📱 Общая архитектура

Мобильное приложение должно реализовать следующую логику:
1. **Хранение токенов** в Secure Storage
2. **Автоматическое добавление токена** в запросы
3. **Обработка истечения Access Token** (автоматическое обновление)
4. **Обработка ошибок** и перенаправление на логин
5. **Управление состоянием** авторизации

---

## 🔐 1. Хранение токенов

### Secure Storage

**Важно:** Токены должны храниться в защищенном хранилище, недоступном для других приложений.

#### React Native:
```typescript
import * as SecureStore from 'expo-secure-store';

// Сохранение
await SecureStore.setItemAsync('accessToken', accessToken);
await SecureStore.setItemAsync('refreshToken', refreshToken);

// Получение
const accessToken = await SecureStore.getItemAsync('accessToken');
const refreshToken = await SecureStore.getItemAsync('refreshToken');

// Удаление
await SecureStore.deleteItemAsync('accessToken');
await SecureStore.deleteItemAsync('refreshToken');
```

#### Flutter:
```dart
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

final storage = FlutterSecureStorage();

// Сохранение
await storage.write(key: 'accessToken', value: accessToken);
await storage.write(key: 'refreshToken', value: refreshToken);

// Получение
String? accessToken = await storage.read(key: 'accessToken');
String? refreshToken = await storage.read(key: 'refreshToken');

// Удаление
await storage.delete(key: 'accessToken');
await storage.delete(key: 'refreshToken');
```

#### Нативное iOS (Swift):
```swift
import Security

// Сохранение
let query: [String: Any] = [
    kSecClass as String: kSecClassGenericPassword,
    kSecAttrAccount as String: "accessToken",
    kSecValueData as String: accessToken.data(using: .utf8)!
]
SecItemAdd(query as CFDictionary, nil)

// Получение
let query: [String: Any] = [
    kSecClass as String: kSecClassGenericPassword,
    kSecAttrAccount as String: "accessToken",
    kSecReturnData as String: true
]
var result: AnyObject?
SecItemCopyMatching(query as CFDictionary, &result)
```

#### Нативное Android (Kotlin):
```kotlin
import android.content.Context
import android.content.SharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey

// Создание EncryptedSharedPreferences
val masterKey = MasterKey.Builder(context)
    .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
    .build()

val sharedPreferences = EncryptedSharedPreferences.create(
    context,
    "secure_prefs",
    masterKey,
    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
)

// Сохранение
sharedPreferences.edit()
    .putString("accessToken", accessToken)
    .apply()

// Получение
val accessToken = sharedPreferences.getString("accessToken", null)
```

---

## 🔄 2. HTTP Client с автоматическим добавлением токена

### Базовая структура

Мобильное приложение должно иметь HTTP клиент, который:
1. Автоматически добавляет Access Token в заголовок `Authorization`
2. Обрабатывает ошибку 401 (истекший токен)
3. Автоматически обновляет токен при необходимости
4. Повторяет запрос с новым токеном

### Пример реализации (TypeScript/React Native):

```typescript
class ApiClient {
  private baseURL = 'https://api.example.com';
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private isRefreshing = false;
  private refreshPromise: Promise<string> | null = null;

  // Инициализация - загрузка токенов из Secure Storage
  async initialize() {
    this.accessToken = await SecureStore.getItemAsync('accessToken');
    this.refreshToken = await SecureStore.getItemAsync('refreshToken');
  }

  // Основной метод для запросов
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    // Загружаем токен, если его нет в памяти
    if (!this.accessToken) {
      this.accessToken = await SecureStore.getItemAsync('accessToken');
    }

    // Добавляем токен в заголовки
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(this.accessToken && {
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers
      });

      // Если токен истек (401), пытаемся обновить
      if (response.status === 401) {
        const newToken = await this.refreshAccessToken();
        
        // Повторяем запрос с новым токеном
        const retryHeaders = {
          ...headers,
          'Authorization': `Bearer ${newToken}`
        };
        
        const retryResponse = await fetch(`${this.baseURL}${endpoint}`, {
          ...options,
          headers: retryHeaders
        });

        if (!retryResponse.ok) {
          throw new Error(`Request failed: ${retryResponse.status}`);
        }

        return await retryResponse.json();
      }

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  // Обновление Access Token
  private async refreshAccessToken(): Promise<string> {
    // Если уже идет обновление, ждем его
    if (this.isRefreshing && this.refreshPromise) {
      return await this.refreshPromise;
    }

    this.isRefreshing = true;
    
    this.refreshPromise = (async () => {
      try {
        // Загружаем refresh token
        if (!this.refreshToken) {
          this.refreshToken = await SecureStore.getItemAsync('refreshToken');
        }

        if (!this.refreshToken) {
          throw new Error('No refresh token available');
        }

        // Запрос на обновление токена
        const response = await fetch(`${this.baseURL}/auth/mobile/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            refreshToken: this.refreshToken
          })
        });

        if (!response.ok) {
          // Refresh token истек или невалиден
          await this.logout();
          throw new Error('Refresh token expired');
        }

        const data = await response.json();
        const newAccessToken = data.accessToken;

        // Сохраняем новый токен
        this.accessToken = newAccessToken;
        await SecureStore.setItemAsync('accessToken', newAccessToken);

        return newAccessToken;
      } finally {
        this.isRefreshing = false;
        this.refreshPromise = null;
      }
    })();

    return await this.refreshPromise;
  }

  // Выход
  async logout() {
    // Удаляем токены из Secure Storage
    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('refreshToken');
    
    // Очищаем из памяти
    this.accessToken = null;
    this.refreshToken = null;

    // Опционально: отправляем запрос на сервер для удаления refresh token
    if (this.refreshToken) {
      try {
        await fetch(`${this.baseURL}/auth/mobile/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
          },
          body: JSON.stringify({
            refreshToken: this.refreshToken
          })
        });
      } catch (error) {
        console.error('Logout request failed:', error);
      }
    }
  }
}

// Экспорт singleton
export const apiClient = new ApiClient();
```

---

## 🔑 3. Логин и регистрация

### Логин

```typescript
async login(email: string, password: string) {
  try {
    const response = await fetch(`${this.baseURL}/auth/mobile/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    const { accessToken, refreshToken, user } = data;

    // Сохраняем токены
    await SecureStore.setItemAsync('accessToken', accessToken);
    await SecureStore.setItemAsync('refreshToken', refreshToken);

    // Сохраняем в память
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    // Сохраняем информацию о пользователе (опционально)
    await SecureStore.setItemAsync('user', JSON.stringify(user));

    return { user, accessToken, refreshToken };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
```

### Регистрация

```typescript
async register(userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
}) {
  try {
    const response = await fetch(`${this.baseURL}/auth/mobile/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    // После регистрации нужно подтвердить email
    // Токены не выдаются до подтверждения
    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}
```

---

## 📋 4. Работа с организациями

### Получение списка организаций

```typescript
async getOrganizations() {
  return await this.request<Array<{
    organizationId: string;
    name: string;
    role: string;
  }>>('/organizations');
}
```

### Выбор текущей организации

**Вариант 1: Хранить в JWT payload (требует изменения на сервере)**

Если сервер поддерживает обновление JWT с `currentOrganizationId`:

```typescript
async selectOrganization(organizationId: string) {
  const response = await this.request<{
    accessToken: string;
    organization: {
      organizationId: string;
      name: string;
      role: string;
    };
  }>(`/organizations/${organizationId}/select`, {
    method: 'POST'
  });

  // Обновляем Access Token с новым organizationId
  if (response.accessToken) {
    this.accessToken = response.accessToken;
    await SecureStore.setItemAsync('accessToken', response.accessToken);
  }

  return response.organization;
}
```

**Вариант 2: Хранить локально (проще для начала)**

```typescript
async selectOrganization(organizationId: string) {
  // Сохраняем выбранную организацию локально
  await SecureStore.setItemAsync('currentOrganizationId', organizationId);
  
  // Опционально: отправляем запрос на сервер для сохранения в сессии
  // (если сервер поддерживает это для мобильных клиентов)
  await this.request(`/organizations/${organizationId}/select`, {
    method: 'POST'
  });

  return { organizationId };
}

// При каждом запросе добавляем organizationId в заголовок или body
async createWarehouse(warehouseData: any) {
  const currentOrgId = await SecureStore.getItemAsync('currentOrganizationId');
  
  return await this.request('/warehouses', {
    method: 'POST',
    body: JSON.stringify({
      ...warehouseData,
      organizationId: currentOrgId  // Если сервер требует
    })
  });
}
```

---

## ⚠️ 5. Обработка ошибок

### Централизованная обработка

```typescript
class ApiClient {
  // ... предыдущий код ...

  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      // ... логика запроса ...
    } catch (error) {
      // Обработка различных типов ошибок
      if (error instanceof Error) {
        if (error.message.includes('Refresh token expired')) {
          // Перенаправление на экран логина
          this.handleUnauthorized();
        } else if (error.message.includes('Network')) {
          // Обработка сетевых ошибок
          throw new Error('Нет подключения к интернету');
        }
      }
      throw error;
    }
  }

  private handleUnauthorized() {
    // Очищаем токены
    this.logout();
    
    // Перенаправляем на экран логина
    // (зависит от навигации вашего приложения)
    // Например, в React Navigation:
    // navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }
}
```

### Обработка специфичных ошибок

```typescript
async handleApiError(response: Response) {
  const error = await response.json();

  switch (response.status) {
    case 400:
      // Ошибка валидации
      return {
        type: 'validation',
        message: error.message || 'Ошибка валидации данных',
        errors: error.message // массив ошибок
      };

    case 401:
      // Не авторизован
      return {
        type: 'unauthorized',
        message: 'Сессия истекла. Пожалуйста, войдите снова.'
      };

    case 403:
      // Нет доступа
      return {
        type: 'forbidden',
        message: 'У вас нет доступа к этому ресурсу.'
      };

    case 404:
      // Не найдено
      return {
        type: 'not_found',
        message: 'Ресурс не найден.'
      };

    case 409:
      // Конфликт
      return {
        type: 'conflict',
        message: error.message || 'Конфликт данных.'
      };

    case 500:
      // Ошибка сервера
      return {
        type: 'server_error',
        message: 'Ошибка сервера. Попробуйте позже.'
      };

    default:
      return {
        type: 'unknown',
        message: 'Произошла неизвестная ошибка.'
      };
  }
}
```

---

## 🔄 6. Автоматическое обновление токена (продвинутый вариант)

### Interceptor паттерн

Для предотвращения множественных одновременных запросов на обновление токена:

```typescript
class ApiClient {
  private pendingRequests: Array<{
    resolve: (token: string) => void;
    reject: (error: Error) => void;
  }> = [];

  private async refreshAccessToken(): Promise<string> {
    if (this.isRefreshing) {
      // Если уже идет обновление, ждем его
      return new Promise((resolve, reject) => {
        this.pendingRequests.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      // ... логика обновления токена ...

      // Разрешаем все ожидающие запросы
      this.pendingRequests.forEach(({ resolve }) => {
        resolve(newAccessToken);
      });
      this.pendingRequests = [];

      return newAccessToken;
    } catch (error) {
      // Отклоняем все ожидающие запросы
      this.pendingRequests.forEach(({ reject }) => {
        reject(error as Error);
      });
      this.pendingRequests = [];
      throw error;
    } finally {
      this.isRefreshing = false;
    }
  }
}
```

---

## 📱 7. Управление состоянием авторизации

### React Native / React (Context API)

```typescript
// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { apiClient } from './apiClient';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем, есть ли сохраненные токены при запуске
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      if (accessToken) {
        // Загружаем информацию о пользователе
        await refreshUser();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(email: string, password: string) {
    const result = await apiClient.login(email, password);
    setUser(result.user);
  }

  async function logout() {
    await apiClient.logout();
    setUser(null);
  }

  async function refreshUser() {
    try {
      const userData = await apiClient.request('/users/profile');
      setUser(userData);
    } catch (error) {
      // Если не удалось загрузить пользователя, выходим
      await logout();
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

### Использование в компонентах

```typescript
function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>{user?.email}</Text>
      <Button title="Выйти" onPress={logout} />
    </View>
  );
}
```

---

## 🎯 8. Чек-лист для разработчика мобильного приложения

### Обязательные функции:

- [ ] **Secure Storage** - хранение токенов в защищенном хранилище
- [ ] **HTTP Client** - автоматическое добавление токена в запросы
- [ ] **Обработка 401** - автоматическое обновление токена при истечении
- [ ] **Обработка ошибок** - централизованная обработка всех ошибок API
- [ ] **Логин/Логаут** - корректное сохранение и удаление токенов
- [ ] **Управление состоянием** - отслеживание статуса авторизации
- [ ] **Перенаправление на логин** - при истечении Refresh Token

### Рекомендуемые функции:

- [ ] **Офлайн режим** - кеширование данных для работы без интернета
- [ ] **Retry логика** - повтор запросов при сетевых ошибках
- [ ] **Индикатор загрузки** - показ состояния загрузки
- [ ] **Валидация токена** - проверка срока действия перед запросом
- [ ] **Логирование** - логирование запросов для отладки

---

## 📝 9. Пример полного потока работы

### Сценарий: Пользователь открывает приложение

```
1. Приложение запускается
   ↓
2. Проверяет наличие токенов в Secure Storage
   ↓
3. Если токены есть:
   - Загружает Access Token в память
   - Делает запрос GET /users/profile
   - Если успешно → показывает главный экран
   - Если 401 → пытается обновить токен
     - Если refresh успешен → повторяет запрос
     - Если refresh не удался → показывает экран логина
   ↓
4. Если токенов нет:
   - Показывает экран логина
```

### Сценарий: Пользователь делает запрос

```
1. Пользователь нажимает кнопку (например, "Создать склад")
   ↓
2. Приложение вызывает apiClient.request('/warehouses', { method: 'POST', ... })
   ↓
3. HTTP Client автоматически:
   - Добавляет Access Token в заголовок Authorization
   - Отправляет запрос
   ↓
4. Если ответ 200 OK:
   - Возвращает данные пользователю
   ↓
5. Если ответ 401 Unauthorized:
   - Вызывает refreshAccessToken()
   - Повторяет запрос с новым токеном
   - Если повторный запрос успешен → возвращает данные
   - Если refresh не удался → перенаправляет на логин
```

---

## ✅ Итоговая структура кода

```
mobile-app/
├── src/
│   ├── api/
│   │   ├── apiClient.ts          # HTTP клиент с автоматическим обновлением токенов
│   │   ├── endpoints.ts          # Определение всех эндпоинтов
│   │   └── types.ts              # TypeScript типы для API
│   ├── auth/
│   │   ├── AuthContext.tsx       # Context для управления авторизацией
│   │   ├── useAuth.ts            # Hook для использования авторизации
│   │   └── storage.ts            # Работа с Secure Storage
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── ...
│   └── utils/
│       └── errorHandler.ts       # Обработка ошибок
```

---

**Это вся логика, которая потребуется от мобильного приложения!** 🎉


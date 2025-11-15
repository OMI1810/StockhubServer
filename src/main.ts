import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import IORedis from 'ioredis';
import { ms, StringValude } from './libs/common/utils/ms.utils';
import { parseBoolean } from './libs/common/utils/parse-boolean.utill';
import { RedisStore } from 'connect-redis';

import { AppModule } from './app.module';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  
  // Настройка подключения к Redis для хранения сессий
  const redisPassword = config.get<string>('REDIS_PASSWORD') || '';
  const redisHost = config.get<string>('REDIS_HOST') || 'localhost';
  const redisPort = config.get<number>('REDIS_PORT') || 6379;
  const redisUrl = config.get<string>('REDIS_URL') || 
    (redisPassword 
      ? `redis://:${redisPassword}@${redisHost}:${redisPort}`
      : `redis://${redisHost}:${redisPort}`);
  
  const redis = new IORedis(redisUrl, {
    retryStrategy: (times) => {
      // Не пытаемся переподключаться бесконечно
      if (times > 3) {
        return null; // Останавливаем попытки
      }
      return Math.min(times * 50, 2000);
    },
    maxRetriesPerRequest: null,
    enableOfflineQueue: false,
  });
  
  // Обработка ошибок подключения к Redis
  redis.on('error', (err) => {
    console.warn('Redis connection error:', err.message);
    console.warn('Приложение будет работать, но сессии могут не сохраняться');
  });
  // Обертка для метода set Redis для поддержки формата connect-redis
  const redisSet = redis.set.bind(redis) as (...args: unknown[]) => Promise<unknown>;
  redis.set = ((...args: unknown[]) => {
    if (
      args.length === 3 &&
      typeof args[2] === 'object' &&
      args[2] !== null &&
      'expiration' in (args[2] as Record<string, unknown>)
    ) {
      const expiration = (args[2] as { expiration?: { type?: string; value?: unknown } }).expiration;
      if (expiration?.type && typeof expiration.value !== 'undefined') {
        return redisSet(args[0], args[1], expiration.type, expiration.value);
      }
    }
    return redisSet(...args);
  }) as typeof redis.set;

  // Настройка cookie parser для работы с сессиями
  app.use(cookieParser(config.getOrThrow<string>('SESSION_SECRET')));

  // Глобальная валидация входящих данных через class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Настройка сессий с использованием Redis в качестве хранилища
  app.use(session({
    secret: config.getOrThrow<string>('SESSION_SECRET'),
    name: config.get<string>('SESSION_NAME') || 'stockhub.sid',
    resave: true,
    saveUninitialized: false,
    cookie: {
      domain: config.get<string>('SESSION_DOMAIN') || undefined,
      maxAge: ms(config.get<StringValude>('SESSION_MAX_AGE') || '24h'),
      httpOnly: parseBoolean(
        config.get<string>('SESSION_HTTP_ONLY') || 'true'
      ),
      secure: parseBoolean(
        config.get<string>('SESSION_SECURE') || 'false'
      ),
      sameSite: 'lax'
    },
    store: new RedisStore({
      client: redis,
      prefix: config.get<string>('SESSION_FOLDER') || 'sess:'
    }),
  })
  )

  // Настройка CORS для работы с фронтендом
  app.enableCors({
    origin: config.get<string>('ALLOWED_ORIGIN') || '*',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  // Запуск сервера на указанном порту
  await app.listen(config.get<number>('APPLICATION_PORT') || config.get<number>('PORT') || 4000);
}
bootstrap();

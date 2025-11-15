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
  const redisUrl = config.get<string>('REDIS_URL') || 
    `redis://:${config.getOrThrow<string>('REDIS_PASSWORD')}@${config.getOrThrow<string>('REDIS_HOST')}:${config.getOrThrow<number>('REDIS_PORT')}`;
  
  const redis = new IORedis(redisUrl);
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
  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  // Глобальная валидация входящих данных через class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Настройка сессий с использованием Redis в качестве хранилища
  app.use(session({
    secret: config.getOrThrow<string>('SESSION_SECRET'),
    name: config.getOrThrow<string>('SESSION_NAME'),
    resave: true,
    saveUninitialized: false,
    cookie: {
      domain: config.getOrThrow<string>('SESSION_DOMAIN'),
      maxAge: ms(config.getOrThrow<StringValude>('SESSION_MAX_AGE')),
      httpOnly: parseBoolean(
        config.getOrThrow<string>('SESSION_HTTP_ONLY')
      ),
      secure: parseBoolean(
        config.getOrThrow<string>('SESSION_SECURE')
      ),
      sameSite: 'lax'
    },
    store: new RedisStore({
      client: redis,
      prefix: config.getOrThrow<string>('SESSION_FOLDER')
    }),
  })
  )

  // Настройка CORS для работы с фронтендом
  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  // Запуск сервера на указанном порту
  await app.listen(config.getOrThrow<number>('APPLICATION_PORT'));
}
bootstrap();

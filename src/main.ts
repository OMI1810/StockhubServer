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
  const redis = new IORedis(config.getOrThrow<string>('REDIS_URL'));

  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );


  app.use(session({
    secret: config.getOrThrow<string>('SESSION_SECRET'),
    name: config.getOrThrow<string>('SESSION_NAME'),
    resave: true,
    saveUninitialized: false,
    cookie: {
      domain: config.getOrThrow<string>('COOKIE_DOMAIN'),
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
      prefix: config.getOrThrow<string>('SESSION_FOLDER_NAME')
    }),
  })
  )

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGINS'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  await app.listen(config.getOrThrow<number>('APPLICATION_PORT'));
}
bootstrap();

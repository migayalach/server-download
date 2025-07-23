import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import './graphql/enums';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('download');
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['POST'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

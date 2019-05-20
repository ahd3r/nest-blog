import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap()
  .then(() => {
    console.log('Run on 3000...');
  })
  .catch((err: Error) => {
    throw new Error(err.message);
  });

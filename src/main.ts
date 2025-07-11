import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Enable URL versioning like /v1/...
  app.enableVersioning({
    type: VersioningType.URI,
  });
    // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips unknown properties
    forbidNonWhitelisted: true, // throws error on unknown properties
    transform: true, // auto-transform payloads to DTO classes
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

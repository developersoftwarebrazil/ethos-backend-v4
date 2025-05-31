import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthLoggerService } from './auth-logger/auth-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useLogger(app.get(AuthLoggerService));

  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
}
bootstrap();

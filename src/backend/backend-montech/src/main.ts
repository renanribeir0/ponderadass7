import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let app;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableShutdownHooks()
  await app.listen(3001);
  return app;
}
app = bootstrap();

export { app  };
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.enableCors({origin: process.env.SERVER});
  app.enableCors({origin: process.env.WEB});

  await app.listen(3000);
}
bootstrap();

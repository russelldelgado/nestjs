import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //ESTO LO QUE HACE ES TODO LO QUE ENVIA A PARTIR DE UNA PETICIÓN HTTP QUE TIENEN UN TIPO DTO QUE CONTINENE EL CLASSS VALIDATORS
  app.useGlobalPipes(new ValidationPipe({transform : true}))

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { useContainer } from 'class-validator'
import { AppModule } from './app.module'

const swaggerSetup = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('TBD project')
    .setDescription('To be announced')
    .setVersion('1.0')
    .addTag('tbd')
    .addBearerAuth('Authorization', 'header', 'apiKey')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  swaggerSetup(app)
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000)
}
bootstrap()

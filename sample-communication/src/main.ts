import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 3002, // Specify the port your microservice will listen on
      },
    },
  );

  await app.listen();
  // console.log('Microservice is listening on TCP port 3001');
}

bootstrap();

import * as express from 'express';
import * as moment from 'moment-timezone';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common';
import { CustomLoggerService } from './config/logger/logger.service';
import { AppModule } from './app/app.module';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set the default timezone to Africa/Lagos
  moment.tz.setDefault('Africa/Lagos');

  // Access the underlying Express app and enable trust proxy
  const expressApp = app.getHttpAdapter().getInstance() as express.Application;
  expressApp.set('trust proxy', 1); // Enable trust for proxies (like Ngrok)

  // Serve static files (including favicon)
  app.use(express.static(path.join(__dirname, 'public'))); // Ensure favicon.ico is in this folder

  // Get configurations
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000); // Default to 3000
  const productionUrl = configService.get<string>('PRODUCTION_URL');
  const prodSocketUrl = configService.get<string>('PRODUCTION_SOCKET_URL');
  const platform = configService.get<string>('PLATFORM_NAME');
  const logger = app.get(CustomLoggerService);

  // Enable security features
  app.use(helmet());

  // Rate limiting to prevent abuse
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5000, // Limit each IP to 5000 requests per windowMs
  });
  app.use(limiter);

  // CORS settings
  app.enableCors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET,PATCH,POST,PUT,DELETE',
  });

  // JSON body limit
  app.use(express.json({ limit: '10kb' })); // Set a reasonable limit

  // Global filters and pipes
  app.useGlobalFilters(new AllExceptionsFilter(logger));
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      transform: true,
      whitelist: false,
    }),
  );

  // Swagger configuration
  const swaggerOptions = new DocumentBuilder()
    .setTitle(`${platform} API`)
    .setDescription(`API Documentation for ${platform} API`)
    .setVersion('1.0.0')
    .addServer(`http://localhost:${port}`, 'Local environment')
    .addServer(productionUrl, 'Production environment')
    .addServer(`ws://localhost:${port}`, 'Local WebSocket server')
    .addServer(`${prodSocketUrl}:${port}`, 'Production WebSocket server')
    .addBearerAuth(
      { type: 'http', scheme: 'Bearer', bearerFormat: 'JWT' },
      'Authorization',
    )
    .addTag('Server', 'Endpoint for Server functions')
    .addTag('User', 'Endpoint for User functions')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);

  // Setup Swagger at /docs
  SwaggerModule.setup('docs', app, swaggerDocument, {
    customSiteTitle: `${platform} API`,
    swaggerOptions: {
      explorer: false,
      defaultModelsExpandDepth: -1,
      docExpansion: 'list',
      defaultModelRendering: 'model',
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
      displayRequestDuration: true,
      jsonEditor: true,
      useUnsafeSource: true,
      deepLinking: true,
    },
    customCss: `
    .swagger-ui .topbar { display: none; }
    link[rel="icon"] {
      href: /favicon.ico;
    }
  `,
  });

  // Start the server
  try {
    await app.listen(port);
    console.log(`Server is running at http://localhost:${port}`);
  } catch (err) {
    logger.error('Error starting the server:', err); // Use logger instead of console.error
  }
}

bootstrap();

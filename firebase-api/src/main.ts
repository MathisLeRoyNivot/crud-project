import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

// Initialize Nest Main function
const bootstrap = async (expressApp: Express.Application) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true});
  app.use(helmet());
  return app.init();
};

// Create Server for Functions
const server = express();
bootstrap(server).catch(err => console.error('Nest did not start', err));

// Expose function to Firebase listening
export const api = functions.region('europe-west1').https.onRequest(server);

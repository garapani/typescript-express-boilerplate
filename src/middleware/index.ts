import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import routes from '../routes/index';
import { notFoundHandlerMiddleware } from './notfound.middleware';
import { errorHandlerMiddleware } from './error-handler.middleware';

// Middlewares
export default function bootstrapMiddleware(app: Application) {
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', routes);
    app.use(errorHandlerMiddleware);
    app.use(notFoundHandlerMiddleware);
}
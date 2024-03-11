import 'reflect-metadata';
import express, { Application } from 'express';
import bootstrapMiddleware from './middleware';
import dotenv from 'dotenv';

dotenv.config();
var app: Application = express();
bootstrapMiddleware(app);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});
export default app;
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import config from './config';
import { api } from './api/index';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/', express.static(config.publicPath));
app.use('/api', api);

export { app };

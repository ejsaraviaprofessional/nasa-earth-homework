import { Router } from 'express';

import { mapsRouter } from './maps/maps.router';

const api = Router();

api.use('/maps', mapsRouter);
export { api };

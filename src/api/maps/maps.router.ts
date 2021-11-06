import { Router } from 'express';

import * as mapsController from './maps.controller';

const mapsRouter = Router();

mapsRouter.post('/images', mapsController.getMapImageByCoordinates);
export { mapsRouter };

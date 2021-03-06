import { Request, Response } from 'express';
import path from 'path';

import config from '../../config/index';
import { earthClientApi } from '../../services/api-clients/earth-api';
// import { saveFile } from '../../utils/files';

export const getMapImageByCoordinates = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const { longitude, latitude, date } = request.body;
  const imageName = `${longitude}_${latitude}.png`;
  const imagePath = path.join(config.publicPath, imageName);
  try {
    const image = await earthClientApi.getImageByCoordinates({
      lon: longitude,
      lat: latitude,
      date: date,
    });

    return response.json({
      urlImage: image.url,
    });
  } catch (error) {
    return response.status(404).json({
      error,
    });
  }
};

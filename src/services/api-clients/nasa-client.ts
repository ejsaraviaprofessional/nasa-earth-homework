import axios from 'axios';

import config from '../../config/index';

export interface GetImageByCoordinatesParams {
  lon: string;
  lat: string;
  date?: string;
  dim?: number;
  api_key?: string;
}

export class NasaApi {
  protected client;
  protected config;

  constructor() {
    this.client = axios.create({
      baseURL: config.nasa.baseHost,
    });
    this.config = config.nasa;
  }

  protected getJsonAsKeyValueArray(json: any) {
    const keys = Object.keys(json);
    const objectAsArray = keys.map((key) => `${key}=${json[key]}`);
    return objectAsArray;
  }
}

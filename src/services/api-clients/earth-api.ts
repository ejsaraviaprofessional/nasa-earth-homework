import { GetImageByCoordinatesParams, NasaApi } from './nasa-client';

export class EarthApi extends NasaApi {
  constructor() {
    super();
  }

  async getImageByCoordinates(options: GetImageByCoordinatesParams): Promise<any> {
    try {
      const isDateUndefined = !options.date;
      if (isDateUndefined) options.date = this.config.defaultDate;

      options.api_key = this.config.apiKey;
      const queries = this.getJsonAsKeyValueArray(options);
      const urlQueries = queries.join('&');
      const url = `${this.config.api.earth.getAsset}?${urlQueries}`;
      const apiResponse = await this.client.get(url);
      const data = await apiResponse.data;
      return data;
    } catch (error) {
      return `Not received data from Nasa Api`;
    }
  }
}

export const earthClientApi = new EarthApi();

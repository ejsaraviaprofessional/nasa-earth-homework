export const nasaConfig = {
  baseHost: `https://api.nasa.gov`,
  apiKey: process.env.NASA_API_KEY || `PYEtxS4FSBhhlVStB7VeHs8eyr6O5gn6X1JKIoDO`,
  defaultDate: process.env.NASA_API_DEFAULT_DATE || '2014-02-01',
  defaultDimension: process.env.NASA_API_DEFAULT_DIMENSION || 0.01,
  api: {
    earth: {
      getAsset: `/planetary/earth/assets`,
    },
  },
};

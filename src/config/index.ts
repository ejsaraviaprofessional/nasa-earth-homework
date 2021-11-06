import * as path from 'path';

import { nasaConfig } from './nasa.config';

const basePath = path.join(__dirname, '..');

const config = {
  port: process.env.PORT || 3001,
  base_path: basePath,
  publicPath: path.join(basePath, 'public'),
  nasa: nasaConfig,
};

export default config;

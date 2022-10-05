import path from "path";
import { GifOptions, ImageOptions } from '@/engine/interfaces/types';
import { rootPath } from '@/config'

export const FORMAT_OUTPUT_IMAGE = {
  width: 512,
  height: 512,
  smoothing: false,
};
export const DNA_DELIMITER = "-";
export const BASE_PATH = path.resolve(rootPath, 'src/modules/engine');
export const NETWORKS = {
  eth: 'eth',
  sol: 'sol',
};
export const defaultImageOptions: ImageOptions = {
  width: 2000,
  height: 2000,
  smoothing: false,
};
export const defaultGifOptions: GifOptions = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};
export const buildDir = process.env.BUILD_DIR || `${BASE_PATH}/build`;
export const layersDir = process.env.LAYERS_DIR || `${BASE_PATH}/layers`;
export const WEIGHT_IN_BASE_OF = 100;
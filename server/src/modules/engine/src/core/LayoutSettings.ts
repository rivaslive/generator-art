import { defaultGifOptions, defaultImageOptions } from '@/engine/config';
import type {
  GifOptions,
  ImageOptions,
  LayerSetting,
  LayoutSettingsProps,
} from '@/engine/interfaces/types';

export class LayoutSettings {
  public layers: LayerSetting;

  public gifOptions: GifOptions = defaultGifOptions;

  public imageOptions: ImageOptions = defaultImageOptions;

  constructor(props: LayoutSettingsProps) {
    this.layers = props.layers;
    this.gifOptions = props?.gifOptions ?? defaultGifOptions;
    this.imageOptions = props?.imageOptions ?? defaultImageOptions;
  }
}

export type FileType = {
  name: string;
  path: string;
  weight: number;
  isNone?: boolean;
  description?: string;
};

export type FileTypeInVariant = Omit<FileType, 'weight' | 'description'>

export type VariantType = {
  name: string,
  path: string,
  weight: number,
  description: string,
  files: FileTypeInVariant[];
};

export type Layer = {
  name: string;
  path: string;
  description: string;
  files: FileType[];
  variants?: VariantType[];
};

export type LayerSetting = {
  growEditionSizeTo: number;
  layersInOrder: Layer[];
};

export type LayerType = {
  nameDir: string;
  name: string;
  blend: GlobalCompositeOperation;
  weight: number;
  opacity: number;
  bypassDNA: boolean;
  description: string;
  path: string;
  absolutePath: string;
  isNone?: boolean;
  variant?: string;
};

export type ImageOptions = {
  width: number;
  height: number;
  smoothing: boolean;
};

export type GifOptions = {
  export: boolean;
  repeat: number;
  quality: number;
  delay: number;
};

export type LayoutSettingsProps = {
  layers: LayerSetting;
  imageOptions?: ImageOptions;
  gifOptions?: GifOptions;
};

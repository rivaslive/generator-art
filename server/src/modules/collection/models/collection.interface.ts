import { Types } from 'mongoose';

export type FileType = {
  name: string;
  path: string;
  weight?: number;
  isNone?: boolean;
  description?: string;
};

type FileTypeInVariant = Omit<FileType, 'weight' | 'description'>;

export type VariantType = {
  name: string;
  path: string;
  weight: number;
  description: string;
  files: FileTypeInVariant[];
};

export type Status = 'preview' | 'building' | 'cancelled' | 'finished';

export type Layer = {
  name: string;
  path: string;
  description?: string;
  files: FileType[];
  variants?: VariantType[];
  createdAt?: Date;
};

export type CollectionType = {
  name: string;
  user: Types.ObjectId;
  countToGenerate?: number;
  layersInOrder: Layer[];
  createdAt?: Date;
  status?: Status;
};

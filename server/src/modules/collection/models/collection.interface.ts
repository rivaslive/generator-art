import { Types } from 'mongoose';

export type FileType = {
  name: string;
  location?: Types.ObjectId;
  weight?: number;
  isNone?: boolean;
  description?: string;
};

type FileTypeInVariant = Omit<
  FileType,
  'weight' | 'description' | 'location'
> & { location: Types.ObjectId };

export type VariantType = {
  name: string;
  weight: number;
  description: string;
  files: FileTypeInVariant[];
};

export type Status = 'preview' | 'building' | 'cancelled' | 'finished';

export type Layer = {
  name: string;
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

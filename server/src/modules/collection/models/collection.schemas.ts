import { Schema } from 'mongoose';

import type { Layer, FileType, VariantType } from './collection.interface';

export const FileSchema = new Schema<FileType>({
  name: { type: String, required: true },
  path: { type: String, required: true },
  description: { type: String, default: '' },
  weight: Number,
  isNone: { type: Boolean, default: false },
});

FileSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

export const VariantSchema = new Schema<VariantType>({
  name: { type: String, required: true },
  path: { type: String, required: true },
  weight: { type: Number, required: true },
  description: { type: String, default: '' },
  files: [FileSchema],
});

VariantSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

export const LayerSchema = new Schema<Layer>({
  name: { type: String, required: true },
  path: { type: String, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  files: [FileSchema],
  variants: [VariantSchema],
});

LayerSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

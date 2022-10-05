import { model, Schema } from 'mongoose';

import type { CollectionType } from './collection.interface';
import { LayerSchema } from './collection.schemas';
import { status } from '../shared/status';

const CollectionSchema = new Schema<CollectionType>({
  name: { type: String, required: true },
  countToGenerate: { type: Number, default: 0 },
  layersInOrder: [LayerSchema],
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: status,
    default: 'preview',
  },
  createdAt: { type: Date, default: Date.now },
});

CollectionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

export const CollectionModel = model<CollectionType>(
  'Collection',
  CollectionSchema
);

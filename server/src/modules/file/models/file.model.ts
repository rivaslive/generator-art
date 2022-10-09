import { model, Schema } from 'mongoose';
import {ASSETS_URL, SERVER_URL} from '@/config';
import { FileType } from './file.interface';

const fileSchema = new Schema<FileType>(
  {
    mimetype: { type: String, required: true },
    originalName: { type: String, required: true },
    fileName: { type: String, required: true },
    folder: { type: [String], default: [] },
    size: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    virtuals: {
      url: {
        get(): string {
          // @ts-ignore
          return `${SERVER_URL}/gallery/public/${this.fileName || ''}`;
        },
      },
    },
  }
);

fileSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    delete ret._id;
  },
});

export const FileModel = model<FileType>('File', fileSchema);

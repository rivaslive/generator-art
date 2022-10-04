import { model, Schema } from 'mongoose';
import { ASSETS_URL } from '@/config';
import { FileType } from './file.interface';

const fileSchema = new Schema<FileType>(
  {
    mimetype: { type: String, required: true },
    originalName: { type: String, required: true },
    fileName: { type: String, required: true },
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
          return `${ASSETS_URL}/${this.fileName || ''}`;
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

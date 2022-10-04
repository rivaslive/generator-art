import { Types } from 'mongoose';

export type FileType = {
  mimetype: string;
  originalName: string;
  fileName: string;
  size?: number;
  url?: string;
  user?: Types.ObjectId;
  createdAt?: Date;
};

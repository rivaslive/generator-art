import { model, Schema } from 'mongoose';

import { UserType } from './auth.interface';

const userSchema = new Schema<UserType>({
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  jwt: {
    type: String,
    select: false,
  },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const UserModel = model<UserType>('User', userSchema);

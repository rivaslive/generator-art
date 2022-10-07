import { model, Schema } from 'mongoose';

import { UserType } from './auth.interface';

const userSchema = new Schema<UserType>({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  wallet: { type: String, required: true, unique: true },
  provider: {
    type: String,
    required: true,
    enum: ['phantom', 'ledger', 'coinbase', 'burner'],
  },
  status: {
    type: String,
    default: 'incomplete',
    enum: ['completed', 'incomplete'],
  },
  jwt: {
    type: String,
    select: false,
  },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
  createdAt: { type: Date, default: Date.now() },
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

export const UserModel = model<UserType>('User', userSchema);

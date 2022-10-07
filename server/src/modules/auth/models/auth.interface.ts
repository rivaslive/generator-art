import { Types } from 'mongoose';

export type UserType = {
  firstName?: string;
  lastName?: string;
  avatar?: Types.ObjectId;
  email?: string;
  jwt?: string;
  wallet: string;
  status?: 'incomplete' | 'completed';
  createdAt?: Date;
  provider: 'phantom' | 'ledger' | 'coinbase' | 'burner';
};

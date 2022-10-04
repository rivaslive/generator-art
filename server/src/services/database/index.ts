import mongoose from 'mongoose';
import { DATABASE_URI } from '@/config';

export default async function databaseConnect() {
  try {
    console.log('Connecting to DATABASE')
    await mongoose.connect(DATABASE_URI);
    console.log('--- Connected success ---')
    return true;
  } catch (e) {
    console.log('*** fail to connect ***')
    console.log(e);
    return false;
  }
}

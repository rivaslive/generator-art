import axios from 'axios';
import { authKey, baseUrl } from '@/config';
import storage from '@/utils/storage';

export const instance = axios.create({
  baseURL: baseUrl,
});

export const getJWT = () => {
  if (typeof window === 'undefined') {
    return 'Bearer ';
  }
  return `Bearer ${storage.getItem(authKey) ?? ''}`;
};

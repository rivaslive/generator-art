import axios from 'axios';
import { baseUrl } from '@/config';

export const instance = axios.create({
  baseURL: baseUrl,
});

export const getJWT = (jwt: string) => {
  return `Bearer ${jwt}`;
};

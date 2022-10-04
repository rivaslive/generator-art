import { Response } from '@/interfaces/types';

export const SUCCESS_RESPONSE = (res: Response, data: any) =>
  res.status(200).json(data);

export const SUCCESS_MESSAGE_RESPONSE = (res: Response, message: string) =>
  res.status(200).json({
    status: 200,
    message,
  });

export const INTERNAL_SERVER_RESPONSE = (res: Response, data: any) =>
  res.status(500).json(data);


export const INTERNAL_SERVER_MESSAGE_RESPONSE = (res: Response, message: string) =>
  res.status(500).json({
    status: 500,
    message,
  });

export const BAD_REQUEST_RESPONSE = (res: Response, data: any) =>
  res.status(400).json({
    status: 400,
    ...data,
  });

export const BAD_REQUEST_MESSAGE_RESPONSE = (res: Response, message: string) =>
  res.status(400).json({
    status: 400,
    message,
  });

export const NOT_AUTH_RESPONSE = (res: Response) =>
  res.status(401).json({
    status: 401,
    message: 'Unauthorized',
  });

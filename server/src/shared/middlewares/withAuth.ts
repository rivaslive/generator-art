import { NextFunction, Response, Request } from '@/interfaces/types';
import { NOT_AUTH_RESPONSE } from '@/shared/response';
import authService from '@/shared/auth'

export const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if (!token) {
    return NOT_AUTH_RESPONSE(res);
  }

  const verifyUser = await authService.verify(token);
  if (!verifyUser) {
    return NOT_AUTH_RESPONSE(res);
  }

  req.user = verifyUser;
  return next();
};

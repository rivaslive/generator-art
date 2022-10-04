import { Request, Response } from '@/interfaces/types';
import { userServiceRepository } from '@/modules/auth/repositories';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from '@/shared/errorCodes';

const userService = userServiceRepository;

export const login = async (req: Request, res: Response) => {
  const { token } = req.body;

  const { data, error } = await userService.login(token);

  if (!data && error) {
    switch (error.type) {
      case INTERNAL_SERVER_ERROR:
        return INTERNAL_SERVER_MESSAGE_RESPONSE(res, error.message);

      case BAD_REQUEST:
        return BAD_REQUEST_MESSAGE_RESPONSE(res, error.message);

      default:
        return INTERNAL_SERVER_MESSAGE_RESPONSE(res, error.message);
    }
  }

  return SUCCESS_RESPONSE(res, data);
};

export const signUp = async (req: Request, res: Response) => {
  const payload = req.body;

  const { data, error } = await userService.signUp(payload);

  if (!data && error) {
    switch (error.type) {
      case INTERNAL_SERVER_ERROR:
        return INTERNAL_SERVER_MESSAGE_RESPONSE(res, error.message);

      case BAD_REQUEST:
        return BAD_REQUEST_MESSAGE_RESPONSE(res, error.message);

      default:
        return INTERNAL_SERVER_MESSAGE_RESPONSE(res, error.message);
    }
  }

  return SUCCESS_RESPONSE(res, data);
};

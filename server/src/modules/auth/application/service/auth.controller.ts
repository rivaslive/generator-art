import { Request, Response } from '@/interfaces/types';
import { userServiceRepository } from '@/modules/auth/repositories';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';
import setJwtInUser from '@/shared/auth/setJwtInUser';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from '@/shared/errorCodes';

const STATUS_INCOMPLETE = 'incomplete';
const STATUS_COMPLETED = 'completed';
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

export const authWallet = async (req: Request, res: Response) => {
  const { wallet, provider } = req.body;

  try {
    const user = await userService.findByWallet(wallet, provider);
    if (!user) throw new Error('User not found');
    if (user.status === STATUS_INCOMPLETE) {
      return SUCCESS_RESPONSE(res, {
        newUser: true,
        user: null,
      });
    }

    const isValidJwt = await setJwtInUser(user);
    if (!isValidJwt) {
      await user?.save();
    }

    return SUCCESS_RESPONSE(res, {
      newUser: false,
      user,
    });
  } catch (e) {
    try {
      await userService.create({
        wallet,
        provider,
      });

      return SUCCESS_RESPONSE(res, {
        newUser: true,
        user: null,
      });
    } catch (err) {
      return INTERNAL_SERVER_MESSAGE_RESPONSE(
        res,
        // @ts-ignore
        err?.message || 'Internal error server'
      );
    }
  }
};

export const completeProfile = async (req: Request, res: Response) => {
  const { wallet, provider, firstName, lastName, email } = req.body;

  try {
    const user = await userService.findByWallet(wallet, provider);
    if (!user) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'User not found');
    }
    if (user.status === STATUS_COMPLETED) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'User with completed profile');
    }

    user.email = email;
    user.lastName = lastName;
    user.firstName = firstName;
    user.status = STATUS_COMPLETED;

    await setJwtInUser(user);
    await user?.save();

    return SUCCESS_RESPONSE(res, user);
  } catch (err) {
    const isEmailUnique =
      // @ts-ignore
      err?.message?.includes('E11000') && err?.message?.includes('email');

    if (isEmailUnique) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Email already exist');
    }

    return INTERNAL_SERVER_MESSAGE_RESPONSE(
      res,
      // @ts-ignore
      err?.message || 'Internal error server'
    );
  }
};

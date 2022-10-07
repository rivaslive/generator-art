import { Model, UpdateQuery } from 'mongoose';
import { UserType } from '@/modules/auth/models';
import GoogleAuth from '../Provider/Google';
import security from '@/shared/auth';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from '@/shared/errorCodes';

type SignUpWithGoogle = { token: string };

export class DataRepository<T> {
  private _repository: Model<T>;

  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async login(token: string, type: TokenType = 'token') {
    const googleAuth = await GoogleAuth.verify(token, type);

    if (!googleAuth) {
      return {
        error: {
          type: BAD_REQUEST,
          message: 'Token is not valid',
        },
        data: null,
      };
    }

    const repository = this._repository as unknown as Model<UserType>;
    const query = repository.findOne({ email: googleAuth.email });
    const user = (await query.select('+jwt')) as any;

    if (!user) {
      return {
        error: {
          type: INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
        },
        data: null,
      };
    }

    if (user?.jwt) {
      const verifyToken = await security.verify(user.jwt);
      if (verifyToken) {
        return {
          error: null,
          data: {
            user,
            jwt: user.jwt,
          },
        };
      }
    }
    const jwt = await security.create(user?.toJSON ? user.toJSON() : user);
    user.jwt = jwt;

    await user.save();

    return {
      error: null,
      data: {
        user,
        jwt,
      },
    };
  }

  async signUp(payload: SignUpWithGoogle, type: TokenType = 'token') {
    const googleAuth = await GoogleAuth.verify(payload.token, type);

    if (!googleAuth) {
      return {
        error: {
          type: BAD_REQUEST,
          message: 'Token is not valid',
        },
        data: null,
      };
    }

    const repository = this._repository as unknown as Model<UserType>;

    try {
      const verifyUser = await repository.findOne({ email: googleAuth.email });
      if (verifyUser) {
        return {
          error: {
            type: BAD_REQUEST,
            message: 'User already exist',
          },
          data: null,
        };
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const user = (await repository.create({
        ...payload,
        firstName: googleAuth.firstName,
        lastName: googleAuth.lastName,
        email: googleAuth.email,
      })) as any;
      const jwt = await security.create(user?.toJSON ? user.toJSON() : user);

      user.jwt = jwt;
      await user.save();

      return {
        error: null,
        data: {
          user,
          jwt,
        },
      };
    } catch (error) {
      return {
        error: {
          type: INTERNAL_SERVER_ERROR,
          // @ts-ignore
          message: error?.message || 'Internal server error',
        },
        data: null,
      };
    }
  }

  create(item: T) {
    return this._repository.create(item);
  }

  update(id: ID, item: UpdateQuery<T>) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  findByWallet(wallet: string, provider: string) {
    const user = this._repository.findOne({ wallet, provider });
    if (user) return user;
    throw new Error('User not found')
  }
}

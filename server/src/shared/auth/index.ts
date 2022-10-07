import Jwt from 'jsonwebtoken';
import { authKey } from '@/config';
import { UserType } from '@/modules/auth/models/auth.interface';
import { FileType } from '@/modules/file/models/file.interface';

const create = async (
  user: Pick<UserType, 'email' | 'firstName' | 'lastName'> & {
    id: string;
    avatar?: FileType;
  }
) => {
  try {
    return Jwt.sign(
      {
        id: user.id?.toString ? user.id.toString() : user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user?.avatar?.url ?? null,
      },
      authKey
    );
  } catch (e) {
    console.log(e);
    throw new Error('Token not generated');
  }
};

const verify = async (jwt: string | null) => {
  if (!jwt) return null;
  try {
    return Jwt.verify(jwt, authKey);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getTokenFromHeaders = (authorization: string) => {
  const tokenInArr = authorization.split('Bearer ');
  if (tokenInArr.length > 1) return tokenInArr[1];
  return null;
};

const getUser = async (authorization?: string) => {
  if (!authorization) return null;
  const token = getTokenFromHeaders(authorization);
  return verify(token);
};

const security = {
  create,
  verify,
  getUser,
  getTokenFromHeaders,
};

export default security;

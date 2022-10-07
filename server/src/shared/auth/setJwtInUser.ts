import security from '@/shared/auth';

export default async function setJwtInUser(user: any) {
  if (user?.jwt) {
    const verifyToken = await security.verify(user.jwt);
    if (verifyToken) {
      return true;
    }
  }
  user.jwt = await security.create(user);
  return false;
}

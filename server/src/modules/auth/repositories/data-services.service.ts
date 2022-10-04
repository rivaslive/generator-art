import { UserType, UserModel } from '../models';
import { DataRepository } from './data-services.repository';

export const userServiceRepository = new DataRepository<UserType>(UserModel, [
  'avatar',
]);

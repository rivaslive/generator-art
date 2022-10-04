import { FileType, FileModel } from '../models';
import { DataRepository } from './data-services.repository';

export const fileServiceRepository = new DataRepository<FileType>(FileModel);

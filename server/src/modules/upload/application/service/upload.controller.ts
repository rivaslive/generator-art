import path from 'path';
import { publicPath } from '@/config';
import asyncForEach from "@/shared/asyncForEach";
import { Request, Response, File } from '@/interfaces/types';
import { fileServiceRepository } from '@/modules/file/repositories';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';

type FileType = { file: File };
type FilesType = { files: File[] };

const fileService = fileServiceRepository;

const createFile = (service: typeof fileService, file: File) => {
  return service.create({
    size: file.size,
    mimetype: file.mimetype,
    fileName: file.filename,
    originalName: file.originalname,
  });
};

export const uploadFile = async (req: Request<FileType>, res: Response) => {
  const { file } = req;
  if (!file) return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Please send file');

  try {
    const newFile = await createFile(fileService, file);
    return SUCCESS_RESPONSE(res, newFile);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const uploadFiles = async (req: Request<FilesType>, res: Response) => {
  const { files } = req;
  if (!files || !files?.length) return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Please send files array');

  const createFiles = await asyncForEach<File, any>(files as File[], async (file) => {
    return await createFile(fileService, file);
  })

  return SUCCESS_RESPONSE(res, createFiles);
};

export const resolveFile = (req: Request, res: Response) => {
  const { fileName } = req.params;
  return res.sendFile(path.join(publicPath, fileName));
};

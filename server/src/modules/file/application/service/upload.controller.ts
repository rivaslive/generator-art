import path from 'path';
import { publicPath } from '@/config';
import asyncForEach from '@/shared/asyncForEach';
import { Request, Response, File } from '@/interfaces/types';
import { FileType as FileDBType } from '../../models/file.interface';
import { fileServiceRepository } from '@/modules/file/repositories';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';

type FileType = { file: File };
type FilesType = { files: File[] };

const fileService = fileServiceRepository;

const createFile = (
  service: typeof fileService,
  file: File,
  payload: any = {}
) => {
  return service.create({
    size: file.size,
    mimetype: file.mimetype,
    fileName: file.filename,
    originalName: file.originalname,
    ...payload,
  });
};

const formatFolderPath = (_path: string = '') => {
  if (!_path) return undefined;
  return _path.split('/');
};

export const uploadFile = async (req: Request<FileType>, res: Response) => {
  const { file } = req;
  const { folder: folderPath } = req.body;
  const { id: userId } = req.user;
  const folder = formatFolderPath(folderPath);

  console.log(folder);

  if (!file) return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Please send file');

  try {
    const newFile = await createFile(fileService, file, {
      user: userId,
      folder,
    });
    return SUCCESS_RESPONSE(res, newFile);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const uploadFiles = async (req: Request<FilesType>, res: Response) => {
  const { files } = req;
  const { folder: folderPath } = req.body;
  const { id: userId } = req.user;
  const folder = formatFolderPath(folderPath);

  if (!files || !files?.length)
    return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Please send files array');

  const createFiles = await asyncForEach<File, any>(
    files as File[],
    async (file) => {
      return await createFile(fileService, file, { user: userId, folder });
    }
  );

  return SUCCESS_RESPONSE(res, createFiles);
};

const formatFile = (file: any) => {
  return {
    id: file.id.toString(),
    size: file.size,
    mimetype: file.mimetype,
    fileName: file.fileName,
    folder: file.folder,
    url: file.url,
  } as unknown as FileDBType;
};

export const getGallery = async (req: Request, res: Response) => {
  const { id: idUser } = req.user;
  try {
    const filesInDB = await fileService.findAllByUser(idUser);

    const filesForFolder: { name: string; files: FileDBType[] }[] = [];

    const files: FileDBType[] = filesInDB.filter((file) => {
      if (!file?.folder?.length) return true;
      file.folder.forEach((folderName) => {
        const findIndex = filesForFolder.findIndex(
          (f) => f.name === folderName
        );
        if (findIndex !== -1) {
          filesForFolder[findIndex].files.push(formatFile(file));
        } else {
          filesForFolder.push({
            name: folderName,
            files: [formatFile(file)],
          });
        }
      });
      return false;
    });

    return SUCCESS_RESPONSE(res, {
      files,
      folders: filesForFolder,
    });
  } catch (err) {
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal Server Error');
  }
};

export const resolveFile = (req: Request, res: Response) => {
  const { fileName } = req.params;
  return res.sendFile(path.join(publicPath, fileName));
};

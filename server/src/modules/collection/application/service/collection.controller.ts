import { Request, Response } from '@/interfaces/types';
import { collectionServiceRepository } from '@/modules/collection/repositories';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';

const collectionService = collectionServiceRepository;

export const createCollection = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req.user;
  try {
    const newCollection = await collectionService.create({
      name,
      user: id,
      countToGenerate: 0,
      layersInOrder: [],
    });
    return SUCCESS_RESPONSE(res, newCollection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const generateArtCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { id } = req.user;
  try {
    const collection = await collectionService.findOne({
      id: collectionId,
      user: id,
    });
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const getAllCollections = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  try {
    const collections = await collectionService.findAllByUser(userId);
    return SUCCESS_RESPONSE(res, collections);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

import path from 'path';

import { buildPath } from '@/config';
import { Request, Response } from '@/interfaces/types';
import { statusLabels } from '@/modules/collection/shared/status';
import { collectionServiceRepository } from '@/modules/collection/repositories';
import formatCollection from '@/modules/collection/application/shared/formatCollection';
import {
  BAD_REQUEST_MESSAGE_RESPONSE,
  INTERNAL_SERVER_MESSAGE_RESPONSE,
  SUCCESS_MESSAGE_RESPONSE,
  SUCCESS_RESPONSE,
} from '@/shared/response';

import queueCollection from './collection.generate';

const collectionService = collectionServiceRepository;

export const createCollection = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req.user;

  try {
    const currentCollection = await collectionService.findOne({
      user: id,
      status: statusLabels.preview,
    });

    if (currentCollection) {
      return SUCCESS_RESPONSE(res, currentCollection);
    }
  } catch (e) {
    console.log(e);
  }

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

export const deleteCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { id } = req.user;
  try {
    const result = await collectionService.deleteOneAndDelete({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    });
    return SUCCESS_RESPONSE(res, result);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const createLayerCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { name, description } = req.body;
  const { id } = req.user;
  try {
    const collection = await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    });

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.push({
      files: [],
      name,
      description,
    });
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const addFileLayerCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { name, fileId, weight, description, layerId, isNone } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).files.push({
      name,
      location: fileId,
      weight,
      isNone,
      description,
    });
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const addFileToVariantLayer = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { name, fileId, description, layerId, variantId } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).variants.id(variantId).files.push({
      name,
      location: fileId,
      description,
    });
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const addVariantLayerCollection = async (
  req: Request,
  res: Response
) => {
  const { collectionId } = req.params;
  const { name, weight, description, layerId } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).variants.push({
      name,
      path,
      weight,
      description,
      files: [],
    });
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const deleteFileLayerCollection = async (
  req: Request,
  res: Response
) => {
  const { collectionId } = req.params;
  const { fileId, layerId } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).files.id(fileId).remove();
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const deleteFileVariantLayer = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { fileId, layerId, variantId } = req.body;
  const { id } = req.user;

  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder
      .id(layerId)
      .variants.id(variantId)
      .files.id(fileId)
      .remove();

    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const deleteVariantLayerCollection = async (
  req: Request,
  res: Response
) => {
  const { collectionId } = req.params;
  const { variantId, layerId } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).variants.id(variantId).remove();
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const deleteLayerCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { layerId } = req.body;
  const { id } = req.user;
  try {
    const collection = (await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    })) as any;

    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.layersInOrder.id(layerId).remove();
    await collection.save();
    return SUCCESS_RESPONSE(res, collection);
  } catch (e) {
    console.log(e);
    return INTERNAL_SERVER_MESSAGE_RESPONSE(res, 'Internal error server');
  }
};

export const generateArtCollection = async (req: Request, res: Response) => {
  const { collectionId } = req.params;
  const { countToGenerate } = req.body;
  const { id } = req.user;
  try {
    const collection = await collectionService.findOne({
      id: collectionId,
      user: id,
      status: statusLabels.preview,
    });
    if (!collection) {
      return BAD_REQUEST_MESSAGE_RESPONSE(res, 'Not collection found');
    }

    collection.countToGenerate = countToGenerate;
    collection.status = statusLabels.building;
    const collectionForEngine = formatCollection(collection.layersInOrder);

    await collection.save();

    queueCollection(
      {
        imageOptions: undefined,
        pathBuild: path.resolve(buildPath, collection.user.id.toString()),
        layers: {
          layersInOrder: collectionForEngine,
          growEditionSizeTo: 5,
        },
        user: collection.user?.toJSON
          ? collection.user.toJSON()
          : collection.user,
      },
      async () => {
        collection.status = statusLabels.finished;
        await collection.save();
      }
    );
    return SUCCESS_MESSAGE_RESPONSE(res, 'Queue in process');
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

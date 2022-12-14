import { CollectionType, CollectionModel } from '../models';
import { DataRepository } from './data-services.repository';

export const collectionServiceRepository = new DataRepository<CollectionType>(
  CollectionModel,
  [
    'user',
    'layersInOrder.files.location',
    'layersInOrder.variants.files.location',
  ]
);

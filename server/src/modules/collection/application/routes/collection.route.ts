import { createModuleRoute } from '@/services/server';
import { withAuth } from '@/shared/middlewares/withAuth';
import validateMiddleware from '@/shared/middlewares/validatingFiles';

import {
  addFileLayerSchema,
  addVariantLayerSchema,
  createLayerSchema,
  createSchema,
  deleteFileLayerSchema,
  deleteLayerSchema,
  deleteVariantLayerSchema,
} from '../../models/collection.validate';
import {
  createCollection,
  getAllCollections,
  generateArtCollection,
  createLayerCollection,
  deleteFileLayerCollection,
  deleteVariantLayerCollection,
  deleteLayerCollection,
  addVariantLayerCollection,
  addFileLayerCollection,
} from '../service';

const router = createModuleRoute();

router.get('/', withAuth, getAllCollections);
router.post('/generate/:collectionId', withAuth, generateArtCollection);

router.post(
  '/create',
  withAuth,
  validateMiddleware(createSchema),
  createCollection
);

router.post(
  '/create-layer/:collectionId',
  withAuth,
  validateMiddleware(createLayerSchema),
  createLayerCollection
);

router.post(
  '/add-file-layer/:collectionId',
  withAuth,
  validateMiddleware(addFileLayerSchema),
  addFileLayerCollection
);

router.delete(
  '/delete-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteLayerSchema),
  deleteLayerCollection
);

router.delete(
  '/delete-file-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteFileLayerSchema),
  deleteFileLayerCollection
);

router.post(
  '/add-variant-layer/:collectionId',
  withAuth,
  validateMiddleware(addVariantLayerSchema),
  addVariantLayerCollection
);

router.delete(
  '/delete-variant-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteVariantLayerSchema),
  deleteVariantLayerCollection
);

export default router;

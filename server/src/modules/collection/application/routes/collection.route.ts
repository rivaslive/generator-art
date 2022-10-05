import { createModuleRoute } from '@/services/server';
import { withAuth } from '@/shared/middlewares/withAuth';
import validateMiddleware from '@/shared/middlewares/validatingFiles';

import {
  addFileLayerSchema,
  addFileToVariantLayerSchema,
  addVariantLayerSchema,
  createLayerSchema,
  createSchema,
  deleteFileLayerSchema,
  deleteFileVariantLayerSchema,
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
  addFileToVariantLayer,
  deleteFileVariantLayer,
  deleteCollection,
} from '../service';

const router = createModuleRoute();

// collection
router.get('/', withAuth, getAllCollections);
router.post('/generate/:collectionId', withAuth, generateArtCollection);
router.delete('/delete/:collectionId', withAuth, deleteCollection);
router.post(
  '/create',
  withAuth,
  validateMiddleware(createSchema),
  createCollection
);

// layers
router.post(
  '/create-layer/:collectionId',
  withAuth,
  validateMiddleware(createLayerSchema),
  createLayerCollection
);

router.delete(
  '/delete-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteLayerSchema),
  deleteLayerCollection
);

// files
// add file to layer
router.post(
  '/file-layer/:collectionId',
  withAuth,
  validateMiddleware(addFileLayerSchema),
  addFileLayerCollection
);

// delete file to layer
router.delete(
  '/file-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteFileLayerSchema),
  deleteFileLayerCollection
);

// variants
// add variant to layer
router.post(
  '/variant-layer/:collectionId',
  withAuth,
  validateMiddleware(addVariantLayerSchema),
  addVariantLayerCollection
);

// delete variant to layer
router.delete(
  '/variant-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteVariantLayerSchema),
  deleteVariantLayerCollection
);

router.post(
  '/file-variant-layer/:collectionId',
  withAuth,
  validateMiddleware(addFileToVariantLayerSchema),
  addFileToVariantLayer
);

router.delete(
  '/file-variant-layer/:collectionId',
  withAuth,
  validateMiddleware(deleteFileVariantLayerSchema),
  deleteFileVariantLayer
);

export default router;

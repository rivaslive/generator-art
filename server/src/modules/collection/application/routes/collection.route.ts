import { createModuleRoute } from '@/services/server';
import { withAuth } from '@/shared/middlewares/withAuth';
import validateMiddleware from '@/shared/middlewares/validatingFiles';

import { createSchema } from '../../models/collection.validate';
import { createCollection, getAllCollections, generateArtCollection } from '../service';

const router = createModuleRoute();

router.get('/', withAuth, getAllCollections);
router.post('/generate/:collectionId', withAuth, generateArtCollection);
router.post(
  '/create',
  withAuth,
  validateMiddleware(createSchema, true),
  createCollection
);

export default router;

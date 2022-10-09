import { createModuleRoute } from '@/services/server';
import { withAuth } from '@/shared/middlewares/withAuth';
import { getGallery, resolveFile, uploadFile, uploadFiles } from '../service';
import uploadMiddleware from '../middleware/multer';

const router = createModuleRoute();

router.get('/', withAuth, getGallery);
router.get('/public/:fileName', resolveFile);
router.post(
  '/upload-file',
  withAuth,
  uploadMiddleware.single('file'),
  // @ts-ignore
  uploadFile
);

router.post(
  '/upload-files',
  withAuth,
  uploadMiddleware.array('files'),
  // @ts-ignore
  uploadFiles
);

export default router;

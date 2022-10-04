import { createModuleRoute } from '@/services/server';
import { resolveFile, uploadFile, uploadFiles } from '../service';
import uploadMiddleware from '../middleware/multer';

const router = createModuleRoute();

// @ts-ignore
router.post('/upload-file', uploadMiddleware.single('file'), uploadFile);
// @ts-ignore
router.post('/upload-files', uploadMiddleware.array('files'), uploadFiles);
router.get('/:fileName', resolveFile);

export default router;

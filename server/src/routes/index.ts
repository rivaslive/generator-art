import authRoutes from '@/modules/auth/application/routes';
import uploadRoutes from '@/modules/file/application/routes';
import collectionRoutes from '@/modules/collection/application/routes';
import { createModuleRoute } from '@/services/server';

const router = createModuleRoute();

router.use('/gallery', uploadRoutes);
router.use('/collections', collectionRoutes);
router.use('/auth', authRoutes);

export default router;

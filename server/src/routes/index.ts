import authRoutes from '@/modules/auth/application/routes';
import uploadRoutes from '@/modules/upload/application/routes';
import collectionRoutes from '@/modules/collection/application/routes';
import { createModuleRoute } from '@/services/server';

const router = createModuleRoute();

router.use('/public', uploadRoutes);
router.use('/collections', collectionRoutes);
router.use('/auth', authRoutes);

export default router;

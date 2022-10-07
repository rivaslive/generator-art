import { createModuleRoute } from '@/services/server';
import validateMiddleware from '@/shared/middlewares/validatingFiles';

import { authWallet, login, signUp, completeProfile } from '../service';
import {
  signupSchema,
  authWeb3Schema,
  completeProfileSchema,
} from '../../models/auth.validate';

const router = createModuleRoute();

router.post('/', validateMiddleware(authWeb3Schema), authWallet);
router.post(
  '/complete-profile',
  validateMiddleware(completeProfileSchema),
  completeProfile
);

// deprecated
router.post('/signup', validateMiddleware(signupSchema), signUp);
router.post('/login', validateMiddleware(signupSchema), login);

export default router;

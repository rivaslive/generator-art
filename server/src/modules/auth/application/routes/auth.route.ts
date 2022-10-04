import { createModuleRoute } from '@/services/server';
import validateMiddleware from '@/shared/middlewares/validatingFiles';

import { login, signUp } from '../service';
import { signupSchema } from '../../models/auth.validate';

const router = createModuleRoute();

router.post('/signup', validateMiddleware(signupSchema), signUp);
router.post('/login', validateMiddleware(signupSchema), login);

export default router;

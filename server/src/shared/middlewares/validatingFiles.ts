import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from '@/interfaces/types';

const validateMiddleware =
  <TSchema>(schema: ObjectSchema<TSchema>, isAuth = false) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { body, user = '' } = req;
    const payload = isAuth ? { user, ...body } : body;

    schema
      .validateAsync(payload)
      .then(() => next())
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          errors: err?.details ?? [],
        });
      });
  };

export default validateMiddleware;

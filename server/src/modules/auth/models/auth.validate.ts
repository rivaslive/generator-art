import Joi from 'joi';

export const signupSchema = Joi.object({
  token: Joi.string().required(),
});
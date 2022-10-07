import Joi from 'joi';

export const signupSchema = Joi.object({
  token: Joi.string().required(),
});
export const authWeb3Schema = Joi.object({
  wallet: Joi.string().required(),
  provider: Joi.string()
    .valid('phantom', 'ledger', 'coinbase', 'burner')
    .required(),
});
export const completeProfileSchema = Joi.object({
  wallet: Joi.string().required(),
  provider: Joi.string()
    .valid('phantom', 'ledger', 'coinbase', 'burner')
    .required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

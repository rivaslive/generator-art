import Joi from 'joi';

export const createSchema = Joi.object({
  name: Joi.string().required(),
});

export const createLayerSchema = Joi.object({
  name: Joi.string().required(),
  path: Joi.string().required(),
  description: Joi.string().allow(''),
});

export const addFileLayerSchema = Joi.object({
  name: Joi.string().required(),
  path: Joi.string().required(),
  layerId: Joi.string().required(),
  weight: Joi.number().required(),
  description: Joi.string().allow(''),
});

export const addVariantLayerSchema = Joi.object({
  name: Joi.string().required(),
  path: Joi.string().required(),
  layerId: Joi.string().required(),
  weight: Joi.number().required(),
  description: Joi.string().allow(''),
});

export const deleteFileLayerSchema = Joi.object({
  fileId: Joi.string().required(),
  layerId: Joi.string().required(),
});

export const deleteVariantLayerSchema = Joi.object({
  variantId: Joi.string().required(),
  layerId: Joi.string().required(),
});

export const deleteLayerSchema = Joi.object({
  layerId: Joi.string().required(),
});

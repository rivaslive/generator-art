import Joi from 'joi';

export const createSchema = Joi.object({
  name: Joi.string().required(),
});

export const createLayerSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(''),
});

export const addFileLayerSchema = Joi.object({
  name: Joi.string().required(),
  fileId: Joi.string().required(),
  layerId: Joi.string().required(),
  weight: Joi.number().required(),
  isNone: Joi.boolean(),
  description: Joi.string().allow(''),
});


export const addFileToVariantLayerSchema = Joi.object({
  name: Joi.string().required(),
  fileId: Joi.string().required(),
  layerId: Joi.string().required(),
  variantId: Joi.string().required(),
  description: Joi.string().allow(''),
});

export const addVariantLayerSchema = Joi.object({
  name: Joi.string().required(),
  layerId: Joi.string().required(),
  weight: Joi.number().required(),
  description: Joi.string().allow(''),
});

export const deleteFileLayerSchema = Joi.object({
  fileId: Joi.string().required(),
  layerId: Joi.string().required(),
});

export const deleteFileVariantLayerSchema = Joi.object({
  fileId: Joi.string().required(),
  variantId: Joi.string().required(),
  layerId: Joi.string().required(),
});

export const deleteVariantLayerSchema = Joi.object({
  variantId: Joi.string().required(),
  layerId: Joi.string().required(),
});

export const deleteLayerSchema = Joi.object({
  layerId: Joi.string().required(),
});

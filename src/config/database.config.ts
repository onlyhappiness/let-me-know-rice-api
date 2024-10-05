import Joi from 'joi';

export const JoiObject = {
  PORT: Joi.number().required(),
};

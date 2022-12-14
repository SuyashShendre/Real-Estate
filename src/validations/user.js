import Joi from "joi";

export const registerSchema = Joi.object().keys({
  name: Joi.string().required().pattern(/^[a-zA-Z ]+$/),
  email: Joi.string().required().email(),
  phone: Joi.string().required().pattern(/^[0-9]{10}$/),
  password: Joi.string().required(),
});
const Joi = require("joi");
const schemas = {
  addContact: Joi.object()
    .keys({
        fullname: Joi.string().required(),
        email: Joi.string().required(),
        phone_num: Joi.string().required(),
    })
    .unknown(true),
  login: Joi.object()
    .keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    })
    .unknown(true),
  register: Joi.object()
    .keys({
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    })
    .unknown(true),
  editContact: Joi.object()
    .keys({
        fullname: Joi.string().required(),
        email: Joi.string().required(),
        phone_num: Joi.string().required(),
        id: Joi.string().required(),
    })
    .unknown(true),
};
module.exports = schemas;

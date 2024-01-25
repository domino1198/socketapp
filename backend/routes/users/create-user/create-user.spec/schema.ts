import joi from 'joi';
import j2s from 'joi-to-swagger';

// Joi
export const joiSchema = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required(),
  lastName: joi.string().required(),
  firstName: joi.string().required(),
  id: joi.string().uuid(),
});
// end of Joi

const schema = j2s(joiSchema).swagger;
export default schema;
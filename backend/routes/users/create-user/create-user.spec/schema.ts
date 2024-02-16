import joi from "joi";
import j2s from "joi-to-swagger";

// Joi
export const joiSchemaRequest = joi
  .object()
  .keys({
    username: joi.string().required(),
    password: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
  })
  .meta({ className: "SignUpRequest" });

export const joiSchemaResponse = joi
  .object()
  .keys({
    username: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
    id: joi.string().uuid(),
  })
  .meta({ className: "User" });
// end of Joi

const schemaRequest = j2s(joiSchemaRequest).swagger;

const schemaResponse = j2s(joiSchemaResponse).swagger;
export default { schemaRequest, schemaResponse };

import joi from "joi";
import j2s from "joi-to-swagger";

export const joiSchemaRequestAuth = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required(),
});

export const joiSchemaResponse = joi.object().keys({
  accessToken: joi.string().token().length(36),
  user: {
    username: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
    id: joi.string().uuid(),
  },
});

const schemaRequestAuth = j2s(joiSchemaRequestAuth).swagger;
const schemaResponse = j2s(joiSchemaResponse).swagger;
export default { schemaRequestAuth, schemaResponse };

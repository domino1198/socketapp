import joi from "joi";
import j2s from "joi-to-swagger";

export const JoiRequestAuthSchema = joi
  .object()
  .keys({
    username: joi.string().required(),
    password: joi.string().required(),
  })
  .meta({ className: "AuthRequest" });

export const joiSchemaResponse = joi
  .object({
    accessToken: joi.string().token().length(36),
    user: {
      username: joi.string().required(),
      lastName: joi.string().required(),
      firstName: joi.string().required(),
      id: joi.string().uuid(),
    },
  })
  .meta({ className: "AuthResponse" });

const schemaRequestAuth = j2s(JoiRequestAuthSchema).swagger;
const schemaResponse = j2s(joiSchemaResponse).swagger;
export default { schemaRequestAuth, schemaResponse };

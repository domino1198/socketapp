import joi from "joi";
import j2s from "joi-to-swagger";

export const joiSchemaResponse = joi
  .object()
  .keys({
    username: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
    id: joi.string().uuid(),
  })
  .meta({ className: "User" });

const schemaResponse = j2s(joiSchemaResponse).swagger;
export default { schemaResponse };

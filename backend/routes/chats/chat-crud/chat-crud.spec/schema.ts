import joi from "joi";
import j2s from "joi-to-swagger";

export const joiResponseGetChatByIdSchema = joi
  .object({
    name: joi.string(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
    id: joi.string().uuid(),
  })
  .meta({ className: "GetChatByIdResponse" });

const schemaResponseGetChatById = j2s(joiResponseGetChatByIdSchema).swagger;
export default {
  schemaResponseGetChatById,
};

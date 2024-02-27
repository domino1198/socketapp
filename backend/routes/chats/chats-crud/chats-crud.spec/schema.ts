import joi from "joi";
import j2s from "joi-to-swagger";

export const joiResponseGetChatsSchema = joi
  .array()
  .items({
    name: joi.string(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
    id: joi.string().uuid(),
  })
  .meta({ className: "GetChatsResponse" });

export const JoiRequestCreateChatSchema = joi
  .object()
  .keys({
    name: joi.string(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
  })
  .meta({ className: "CreateChatRequest" });

export const joiResponseCreateChatSchema = joi
  .object()
  .keys({
    name: joi.string().required(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
    id: joi.string().uuid(),
  })
  .meta({ className: "CreateChatResponse" });

export const JoiRequestUpdateChatSchema = joi
  .object()
  .keys({
    name: joi.string().required(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
  })
  .meta({ className: "UpdateChatRequest" });

export const joiResponseUpdateChatSchema = joi
  .object({
    id: joi.string().uuid(),
    name: joi.string(),
    users: joi.array().items(
      joi.object().keys({
        id: joi.string().uuid(),
        isAdmin: joi.boolean(),
      })
    ),
  })
  .meta({ className: "UpdateChatResponse" });

const schemaRequestCreateChat = j2s(JoiRequestCreateChatSchema).swagger;
const schemaResponseCreateChat = j2s(joiResponseCreateChatSchema).swagger;
const schemaResponseGetChats = j2s(joiResponseGetChatsSchema).swagger;
const schemaRequestUpdateChat = j2s(JoiRequestUpdateChatSchema).swagger;
const schemaResponseUpdateChat = j2s(joiResponseUpdateChatSchema).swagger;
export default {
  schemaRequestCreateChat,
  schemaResponseCreateChat,
  schemaResponseGetChats,
  schemaRequestUpdateChat,
  schemaResponseUpdateChat,
};

import { Router } from "express";
import verifyToken from "../../verifyToken";
import ChatController from "../../../database/chat/chat";
import schema from "./chat-crud.spec/schema";

export const ChatRouter = Router();

export const swGetChatById = {
  summary: "Получение чата пользователя по id",
  tags: ["chatsController"],
  operationId: "getChatById",
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            ...schema.schemaResponseGetChatById,
          },
        },
      },
    },
  },
};

ChatRouter.get("/", verifyToken, (req: any, res) => {
  (async () => {
    try {
      const chatId = req.params.id;

      const response = await ChatController.getChatById(req.user.id, chatId);

      if (!response) {
        res.status(400).send({
          message: "Chat is not found!",
        });
      } else {
        res.status(200).send({
          ...response,
          users: JSON.parse(response.users),
        });
      }
    } catch (e) {
      res.status(500).send({
        message: JSON.stringify(e),
      });
    }
  })();
});

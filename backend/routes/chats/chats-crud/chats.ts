import verifyToken from "../../verifyToken";
import { Router } from "express";
import schema from "./chats-crud.spec/schema";
import ChatController from "../../../database/chat/chat";
import { ChatRouter } from "../chat-crud/chat";

export const ChatCRUDRouter = Router();

export const swGetChats = {
  summary: "Получение всех чатов пользователя",
  tags: ["chatsController"],
  operationId: "getChats",
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            ...schema.schemaResponseGetChats,
          },
        },
      },
    },
  },
};

export const swCreateChat = {
  summary: "Создание чата",
  tags: ["chatsController"],
  operationId: "createChat",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          ...schema.schemaRequestCreateChat,
        },
      },
    },
  },
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            ...schema.schemaResponseCreateChat,
          },
        },
      },
    },
  },
};

export const swUpdateChat = {
  summary: "Изменить данные чата по id",
  tags: ["chatsController"],
  operationId: "updateChat",
  parameters: [
    {
      name: "id",
      in: "query",
      description: "id чата",
      required: true,
      schema: {
        type: "string",
      },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          ...schema.schemaRequestUpdateChat,
        },
      },
    },
  },
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            ...schema.schemaResponseUpdateChat,
          },
        },
      },
    },
  },
};

export const swDeleteChat = {
  summary: "Удалить чат по id",
  tags: ["chatsController"],
  operationId: "deleteChat",
  parameters: [
    {
      name: "id",
      in: "query",
      description: "id чата",
      required: true,
      schema: {
        type: "string",
      },
    },
  ],
};

ChatCRUDRouter.get("/", verifyToken, (req: any, res) => {
  (async () => {
    try {
      const response = await ChatController.getChats(req.user.id);

      res.status(200).send(
        (response ?? []).map((itemMap) => {
          return {
            ...itemMap,
            users: JSON.parse(itemMap.users),
          };
        })
      );
    } catch (e) {
      res.status(500).send({
        message: JSON.stringify(e),
      });
    }
  })();
});

ChatCRUDRouter.post("/", verifyToken, (req, res) => {
  (async () => {
    try {
      const result = await ChatController.onCreateChat(req.body);

      if (!result)
        res.status(500).send({
          message: "Chat could not be created",
        });

      res.status(200).send(result);
    } catch (e) {
      console.error(e);
    }
  })();
});

ChatRouter.put("/", verifyToken, (req, res) => {
  (async () => {
    try {
      if (req.query.id)
        res.status(400).send({
          message: "Require id!",
        });
      const response = await ChatController.onUpdateChat({
        id: req.query.id,
        ...req.body,
      });

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
      console.error(e);
    }
  })();
});

ChatRouter.delete("/", verifyToken, (req, res) => {
  (async () => {
    try {
      if (req.query.id)
        res.status(400).send({
          message: "Require id!",
        });
      const response = await ChatController.onDeleteChat(
        req.query.id as string
      );

      if (!response) {
        res.status(400).send({
          message: "Chat is not found!",
        });
      }

      res.status(200).send();
    } catch (e) {
      console.error(e);
    }
  })();
});

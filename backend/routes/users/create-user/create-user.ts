import schema from "./create-user.spec/schema";
import UserController from "../../../database/user/user";
import { Router } from "express";

export const createUser = Router();
export const swCreateUser = {
  summary: "Cоздать пользователя",
  operationId: "createUser",
  tags: ["userController"],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          ...schema.schemaRequest,
        },
      },
    },
  },
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            ...schema.schemaResponse,
          },
        },
      },
    },
    "401": {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                example: "user with username *** already exist",
              },
            },
          },
        },
      },
    },
  },
};

createUser.post("/create-user", (req, res) => {
  (async () => {
    try {
      const user = await UserController.getUserByUsername(req.body.username);

      if (user?.length)
        res.status(401).send({
          message: `user with username ${user[0].username} already exist`,
        });
      const result = await UserController.onCreateUser(req.body);
      res.send({ ...result, password: undefined });
    } catch (e) {
      console.error(e);
    }
  })();
});

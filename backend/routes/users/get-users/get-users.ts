import verifyToken from "../../verifyToken";
import UserController from "../../../database/user/user";
import { Router } from "express";
import schema from "./get-users.spec/schema";

export const getUsers = Router();

export const swGetUsers = {
  summary: "Получить всех пользователей",
  tags: ["userController"],
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: { ...schema.schemaResponse },
          },
        },
      },
    },
  },
};
getUsers.get("/", verifyToken, (req, res) => {
  (async () => {
    try {
      const result = await UserController.getUsers();
      await schema.schemaResponse.validateAsync(result);
      res.send(result);
    } catch (e) {
      console.error(e);
    }
  })();
});

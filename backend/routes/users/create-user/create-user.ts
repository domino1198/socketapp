import schema, { joiSchema } from "./create-user.spec/schema";
import UserController from "../../../database/user/user";
import { Router } from "express";

export const createUser = Router();
export const swCreateUser = {
  summary: "создать пользователя",
  tags: ["login"],
  parameters: [
    {
      name: "key",
      in: "header",
      schema: {
        type: "string",
      },
      required: true,
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          ...schema,
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Done",
    },
    default: {
      description: "Error message",
    },
  },
};

createUser.post("/create-user", (req, res) => {
  (async () => {
    try {
      await joiSchema.validateAsync(req.body);
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

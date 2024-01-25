import UserController from "../../../database/user/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyToken from "../../verifyToken";
import { Router } from "express";
import schema from "./auth.spec/schema";

export const AuthRouter = Router();

export const swLogin = {
  summary: "Проверка валидности токена пользователя",
  tags: ["authController"],
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
  },
};

export const swAuth = {
  summary: "Авторизация пользователя",
  tags: ["authController"],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          ...schema.schemaRequestAuth,
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
  },
};

AuthRouter.post("/", (req, res) => {
  (async () => {
    try {
      await schema.schemaRequestAuth.validateAsync(req.body);

      const result = await UserController.getUserByUsername(req.body);

      if (!result?.length)
        res.status(403).send({
          message: "User is not found!",
        });
      else {
        const user = result[0];

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          res.status(401).send({
            message: "Invalid Password!",
          });
        }

        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.API_SECRET as any,
          {
            expiresIn: 86400,
          }
        );

        await schema.schemaResponse.validateAsync({
          user: {
            ...user,
            password: undefined,
          },
          accessToken: token,
        });

        res.status(200).send({
          user: {
            ...user,
            password: undefined,
          },
          accessToken: token,
        });
      }
    } catch (e) {
      console.error(e);
    }
  })();
});

AuthRouter.get("/", verifyToken, (req: any, res) => {
  (async () => {
    await schema.schemaResponse.validateAsync({
      user: {
        ...req.user,
        password: undefined,
      },
      accessToken: req.token,
    });
    res.status(200).send({
      user: {
        ...req.user,
        password: undefined,
      },
      accessToken: req.token,
    });
  })();
});

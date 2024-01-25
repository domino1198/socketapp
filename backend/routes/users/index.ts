import UserController from "../../database/user/user";
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyToken from "../verifyToken";
import { createUser, swCreateUser } from "./create-user/create-user";

const userRouter = Router();

userRouter.get("/", verifyToken, (req, res) => {
  (async () => {
    try {
      const result = await UserController.getUsers();
      res.send(result);
    } catch (e) {
      console.error(e);
    }
  })();
});

userRouter.post("/login", (req, res) => {
  (async () => {
    try {
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

userRouter.get("/auth", verifyToken, (req: any, res) => {
  res.status(200).send(req.user);
});

export const swLoginRoute = {
  "users/create-user": {
    post: {
      ...swCreateUser,
    },
  },
};

export const UserRouter = [userRouter, createUser];

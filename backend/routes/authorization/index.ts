import { AuthRouter, swAuth, swLogin } from "./auth/auth";

export const swLoginRoute = {
  "/auth": {
    get: {
      ...swLogin,
    },
    post: {
      ...swAuth,
    },
  },
};

export const LoginRouter = [AuthRouter];

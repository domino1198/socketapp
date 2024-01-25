import { createUser, swCreateUser } from "./create-user/create-user";
import { getUsers, swGetUsers } from "./get-users/get-users";

export const swUserRoute = {
  "/users/": {
    get: {
      ...swGetUsers,
    },
  },
  "/users/create-user": {
    post: {
      ...swCreateUser,
    },
  },
};

export const UserRouter = [createUser, getUsers];

import { swUserRoute } from "./routes/users";
import { swLoginRoute } from "./routes/authorization";
import { swChatsRoute } from "./routes/chats";
import { ChatSchema } from "./schemas/chat";
import { UserSchema } from "./schemas/user";
import { AuthSchema } from "./schemas/auth";

const swagger = {
  openapi: "3.0.0",
  info: {
    title: "socketapp API for Dangle",
    version: "1.0.0",
    description: "The REST API for socketappe",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Development server",
    },
  ],
  components: {
    schemas: {
      ...AuthSchema,
      ...UserSchema,
      ...ChatSchema,
    },
  },
  paths: {
    ...swLoginRoute,
    ...swUserRoute,
    ...swChatsRoute,
  },
};

export default swagger;

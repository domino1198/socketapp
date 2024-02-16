import { swUserRoute } from "./routes/users";
import { swLoginRoute } from "./routes/authorization";

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
      User: {
        type: "object",
        properties: {
          username: {
            type: "string",
          },
          id: {
            type: "string",
          },
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
        },
      },
      SignUpRequest: {
        type: "object",
        properties: {
          username: {
            type: "string",
          },
          password: {
            type: "string",
          },
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
        },
      },
      AuthRequest: {
        type: "object",
        properties: {
          username: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      AuthResponse: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
          },
          user: {
            $ref: "#/components/schemas/User",
          },
        },
      },
    },
  },
  paths: {
    ...swUserRoute,
    ...swLoginRoute,
  },
};

export default swagger;

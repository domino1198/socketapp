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
  paths: {
    ...swUserRoute,
    ...swLoginRoute,
  },
};

export default swagger;

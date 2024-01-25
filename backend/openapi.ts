import { swLoginRoute } from "./routes/users";

const swagger = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Dangle",
    version: "1.0.0",
    description: "The REST API for Dangle Panel service",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
  paths: {
    ...swLoginRoute,
  },
};

export default swagger;

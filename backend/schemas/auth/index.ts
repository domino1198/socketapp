export const AuthSchema = {
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
};

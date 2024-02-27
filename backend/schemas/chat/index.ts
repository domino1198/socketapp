export const ChatSchema = {
  Chat: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      name: {
        type: "string",
      },
      users: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            isAdmin: {
              type: "boolean",
            },
          },
        },
      },
    },
  },

  GetChatsResponse: {
    type: "array",
    items: {
      $ref: "#/components/schemas/Chat",
    },
  },

  GetChatByIdResponse: {
    type: "object",
    $ref: "#/components/schemas/Chat",
  },

  UpdateChatRequest: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      users: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            isAdmin: {
              type: "boolean",
            },
          },
        },
      },
    },
  },

  UpdateChatResponse: {
    $ref: "#/components/schemas/Chat",
  },

  CreateChatRequest: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      users: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            isAdmin: {
              type: "boolean",
            },
          },
        },
      },
    },
  },

  CreateChatResponse: {
    $ref: "#/components/schemas/Chat",
  },
};

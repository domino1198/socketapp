import {
  ChatCRUDRouter,
  swCreateChat,
  swDeleteChat,
  swGetChats,
  swUpdateChat,
} from "./chats-crud/chats";
import { swGetChatById } from "./chat-crud/chat";

export const swChatsRoute = {
  "/chats": {
    get: {
      ...swGetChats,
    },
    post: {
      ...swCreateChat,
    },
    put: {
      ...swUpdateChat,
    },
    delete: {
      ...swDeleteChat,
    },
  },
  "/chats/:id": {
    get: {
      ...swGetChatById,
    },
  },
};

export const ChatsRouter = [ChatCRUDRouter];

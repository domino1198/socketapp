import connection from "../index";
import { v4 as uuidv4 } from "uuid";
import { Chat, ChatRequest, ChatResponse } from "./types";

const ChatController = {
  onCreateChat: async (request: ChatRequest) => {
    const id = uuidv4();
    const chat: string[] = [id, JSON.stringify(request.users), request.name];

    const sql = "INSERT INTO chats (id, users, name) VALUES (?, ?, ?)";

    try {
      await connection.promise().query(sql, chat);
      return { id, ...request } as Chat;
    } catch (err) {
      console.error(err);
    }
  },

  onUpdateChat: async (request: Chat) => {
    const sql = "UPDATE chats SET name = ?, users = ? WHERE id = ? LIMIT 1";
    const values = [request.name, JSON.stringify(request.users), request.id];
    try {
      const res = await connection.promise().query<ChatResponse[]>(sql, values);
      return res[0][0];
    } catch (err) {
      console.error(err);
    }
  },

  onDeleteChat: async (id: string) => {
    const sql = "DELETE FROM chats WHERE id = ? LIMIT 1";
    const values = [id];
    try {
      const res = await connection.promise().query(sql, values);
      return res[0];
    } catch (err) {
      console.error(err);
    }
  },

  getChats: async (userId: string) => {
    const sql = "SELECT * from chats WHERE users LIKE ?";
    const values = [`%${userId}%`];

    try {
      const res = await connection.promise().query<ChatResponse[]>(sql, values);
      return res[0];
    } catch (err) {
      console.error(err);
    }
  },

  getChatById: async (userId: string, id: string) => {
    const sql = "SELECT * from chats WHERE users LIKE ? AND id = ?";
    const values = [`%${userId}%`, id];

    try {
      const res = await connection.promise().query<ChatResponse[]>(sql, values);
      return res[0][0];
    } catch (err) {
      console.error(err);
    }
  },
};

export default ChatController;

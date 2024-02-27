import { RowDataPacket } from "mysql2";

export interface ChatResponse extends RowDataPacket {
  id: string;
  users: string;
  name: string;
}
export interface Chat extends ChatRequest {
  id: string;
}

export interface UserByChat {
  id: string;
  isAdmin: boolean;
}

export interface ChatRequest {
  users: UserByChat[];
  name: string;
}

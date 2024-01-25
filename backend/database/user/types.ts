import { RowDataPacket } from 'mysql2';

export interface User extends RowDataPacket {
  username:string
  password:string
  firstName:string
  lastName:string
  id:string
}

export interface RequestCreateUser extends User {
  id:string
}

export interface RequestAuth extends RowDataPacket {
  username:string
  password:string
}
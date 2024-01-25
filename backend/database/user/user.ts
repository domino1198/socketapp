import connection from '../index';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { RequestCreateUser, User } from './types';

const UserController = {

  onCreateUser: async (request: RequestCreateUser) => {
    const id = uuidv4();
    const user = [id, request.username, bcrypt.hashSync(request.password, 8), request.firstName, request.lastName];

    const sql = 'INSERT INTO users (id, username, password,firstName,lastName) VALUES (?, ?, ?, ?, ?)';

    try {
      await connection.promise().query(sql, user);
      return {
        id,
        username: request.username,
        password: bcrypt.hashSync(request.password, 8),
        firstName: request.firstName,
        lastName: request.lastName,
      } as RequestCreateUser;
    } catch (err) {
      console.error(err);
    }

  },

  getUsers: () => {
    const sql = 'SELECT * from users';


    return connection.promise().query(sql)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getUserByUsername: async (username: string) => {
    const sql = 'SELECT * from users WHERE username = ?';
    const values = [username];
    try {
      const res = await connection.promise().query<User[]>(sql, values);
      return res[0];
    } catch (err) {
      console.error(err);
    }
  },

  getUserById: async (id: string) => {
    const sql = 'SELECT * from users WHERE id = ?';
    const values = [id];
    try {
      const res = await connection.promise().query<User[]>(sql, values);
      return res[0][0];
    } catch (err) {
      console.error(err);
    }

  },

};


export default UserController;


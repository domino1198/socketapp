const connection = require('./index');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const e = require('express');

const UserController = {

  onCreateUser: (request) => {
    const id = uuidv4();
    const user = [id, request.username, bcrypt.hashSync(request.password, 8), request.firstName, request.lastName];

    const sql = 'INSERT INTO users (id, username, password,firstName,lastName) VALUES (?, ?, ?, ?, ?)';

    return connection.promise().query(sql, user)
      .then(() => {
        console.log('created user');
        return {
          id,
          username: request.username,
          password: bcrypt.hashSync(request.password, 8),
          firstName: request.firstName,
          lastName: request.lastName,
        };
      })
      .catch((err) => {
        console.error(err);
      });

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

  getUserByUsername: (request) => {
    const sql = 'SELECT * from users WHERE username = ?';
    const values = [request.username];

    return connection.promise().query(sql, values)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err);
      });


  },

  getUserById: (request) => {
    const sql = 'SELECT * from users WHERE id = ?';
    const values = [request.id];

    return connection.promise().query(sql, values)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err);
      });


  },

};


module.exports = UserController;


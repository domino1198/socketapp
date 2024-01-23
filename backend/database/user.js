const connection = require('./index')
const {v4: uuidv4} = require('uuid');

const UserController = {

    onCreateUser: (request) => {
        const id = uuidv4();
        const user = [id, request.username, request.password];

        const sql = "INSERT INTO users (id, username, password) VALUES (?, ?, ?)";

        return connection.promise().query(sql, user)
            .then(() => {
                console.log('created user');
                return {
                    id,
                    username: request.username,
                    password: request.password
                };
            })
            .catch((err) => {
                console.log(err);
            });

    },
    getUsers: () => {
        const sql = "SELECT * from users";

        return connection.promise().query(sql)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}


module.exports = UserController;


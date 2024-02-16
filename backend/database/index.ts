import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  database: "socket-app-mysql",
  user: "admin",
  password: "password",
});

connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

export default connection;

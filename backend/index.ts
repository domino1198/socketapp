import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { UserRouter } from "./routes/users";
import swaggerUI from "swagger-ui-express";
import swDocument from "./openapi";

import database from "./database";
import { LoginRouter } from "./routes/authorization";

const app = express();
const server = createServer(app);
const io = new Server(server);

require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swDocument));

app.use("/api/users", UserRouter);

app.use("/api/auth", LoginRouter);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    socket.emit("messageResponse", msg);
  });
});

const port = process.env.PORT;

server.listen(port, () => {
  console.log("server running at http://localhost:5000");
});

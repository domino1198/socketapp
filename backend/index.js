const express = require('express');
const {createServer} = require('node:http');
const {Server} = require('socket.io');
const userRouter = require('./endpoints/users');

const database = require('./database')



const app = express();
const server = createServer(app);
const io = new Server(server);

require("dotenv")
    .config();


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/users', userRouter);


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socket.emit('messageResponse', msg);
    });
});

server.listen(5000, () => {
    console.log('server running at http://localhost:5000');

});

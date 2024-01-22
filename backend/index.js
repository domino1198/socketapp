const express = require('express');
const {createServer} = require('node:http');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);


app.get('/api', (req, res) => {
        res.send(JSON.stringify({test:'test'}))
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socket.emit('messageResponse', msg);
    });
});

server.listen(5000, () => {
    console.log('server running at http://localhost:5000');
});

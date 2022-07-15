const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket)=>{
    console.log('New user connected');
    socket.emit('message', 'Welcome to');
})

setInterval(()=>{
    io.emit('message', 'Hola all');
}, 3000)

server.listen(8080, ()=> {
    console.log('Server running at http://localhost:8080');
});


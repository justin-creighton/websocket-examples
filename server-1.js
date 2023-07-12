import express from 'express';
import http from "http";
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.SERVER_PORT;

io.on('connection', socket => {
  console.log(`Connected to: ${socket.client.id}`);

  socket.on('someEvent', () => {
    socket.emit('someOtherEvent', {
      message: 'hello!'
    });
  });

  socket.on('newNumber', (number) => {
    console.log(`This is the random number: ${number}`)
  });

  socket.on('disconnect', () => {
    console.log(`Disconnected from: ${socket.client.id}`);
  });
});

server.listen(port, () => {
  console.log(`Waiting for connections on port ${port}`)
})
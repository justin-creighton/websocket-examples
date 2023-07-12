import { io } from 'socket.io-client';

const socket = io('http://127.0.0.1:8000/');

socket.on('connect', () => {
  console.log('Connected!');

  setInterval(() => {
    const randomNumber = Math.ceil(Math.random() * 100);
    socket.emit('newNumber', randomNumber)
  }, 2000)
})

socket.on('disconnect', () => {
  console.log('Disconnected');
})
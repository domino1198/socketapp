import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

export const socket = isDev
  ? io('http://localhost:5000', {
      autoConnect: false,
      transports: ['websocket'],
    })
  : io({ autoConnect: false, transports: ['websocket'] });

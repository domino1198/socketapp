import { socket } from './socket';
import { userService, authService, chatsService } from './rest';

export default {
  socket,
  services: {
    userService,
    authService,
    chatsService,
  },
};

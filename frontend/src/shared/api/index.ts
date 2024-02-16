import { socket } from './socket';
import { userService, authService } from './rest';

export default {
  socket,
  services: {
    userService,
    authService,
  },
};

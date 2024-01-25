import jwt from 'jsonwebtoken';
import UserController from '../database/user/user';
import { User } from '../database/user/types';

const verifyToken = (req: {user?:User,headers:any}, res: any, next: () => void) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET as any, function(err: any, decode: any) {
      if (err) req.user = undefined;
      (async () => {
        try {
          req.user = await UserController.getUserById(decode);
          if (!req.user)
            res.status(403)
              .send({
                message: 'Invalid JWT token',
              });
          else
            next();

        } catch (e) {
          res.status(500)
            .send({
              message: e,
            });
        }
      })();
    });
  } else {
    res.status(403)
      .send({
        message: 'Invalid JWT token',
      });
  }
};
export default verifyToken;
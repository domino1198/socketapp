const jwt = require('jsonwebtoken');
const UserController = require('./database/user');
const verifyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function(err, decode) {
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
module.exports = verifyToken;
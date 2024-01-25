const UserController = require('../../database/user');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../../verifyToken');

const router = Router();

router.get('/', verifyToken, (req, res) => {

  (async () => {
    try {
      const result = await UserController.getUsers();
      res.send(result);
    } catch (e) {
      console.error(e);
    }
  })();

});
router.post('/create-user', (req, res) => {
  (async () => {
    try {
      const user = await UserController.getUserByUsername(req.body);

      if (user[0][0])
        res.status(401).send({
          message: `user with username ${user[0][0].username} already exist`,
        });
      const result = await UserController.onCreateUser(req.body);
      console.log(result);
      res.send({ ...result, password: undefined });
    } catch (e) {
      console.error(e);
    }
  })();
});

router.post('/login', (req, res) => {
  (async () => {
    try {
      const result = await UserController.getUserByUsername(req.body);
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        result.password,
      );

      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({
        id: result.id,
      }, process.env.API_SECRET, {
        expiresIn: 86400,
      });

      res.status(200).send({
        user: {
          id: result.id,
          username: result.username,
          firstName: result.firstName,
          lastName: result.lastName,
        },
        accessToken: token,
      });

    } catch (e) {
      console.error(e);
    }
  })();
});


router.get('/auth', verifyToken, (req, res) => {

  res.status(200)
    .send(user);
});


module.exports = router;



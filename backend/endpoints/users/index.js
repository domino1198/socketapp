const UserController = require('../../database/user')
const {Router} = require('express');


const router = Router();

router.get('/', (req, res) => {

    (async () => {
        try {
            const result = await UserController.getUsers();
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    })()

})
router.post('/create-user', (req, res) => {
    (async () => {
        try {
            const result = await UserController.onCreateUser(req.body)
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    })()
})


module.exports = router;



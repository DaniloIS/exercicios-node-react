const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController')

router.get('/', (req, res) => {
    res.send('hello word')
})

router.post('/user', UserController.create)

module.exports = router;
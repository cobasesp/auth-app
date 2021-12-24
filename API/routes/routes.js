const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/test', (req, res) => {
    res.json({"test": 'ok router'});
})

router.get('/login', (req, res) => UserController.test(req, res));

module.exports = router;
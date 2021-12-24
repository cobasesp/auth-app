const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))

router.post('/login', UserController.login);

module.exports = router;
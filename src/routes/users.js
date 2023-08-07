const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);

module.exports = router;

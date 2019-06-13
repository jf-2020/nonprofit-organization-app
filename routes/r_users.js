const express = require('express'),
      router = express.Router();

const UserController = require('../controllers/c_users');

/* GET routes */
router.get('/login', UserController.login_get);
router.get('/logout', UserController.logout_get);
router.get('/signup', UserController.sign_up_get);

// POST Routes
router.post('/signup', UserController.sign_up_post);
router.post('/login', UserController.login_post);

module.exports = router;
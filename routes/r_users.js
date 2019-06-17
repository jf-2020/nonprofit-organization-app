const express = require('express'),
      router = express.Router();

const UserController = require('../controllers/c_users');

/* GET routes */
router.get('/login', UserController.login_get);
router.get('/logout', UserController.logout_get);
router.get('/signup', UserController.sign_up_get);
router.get('/:first/update-user', UserController.update_user_get);
router.get('/:first/delete-user', UserController.delete_user_get);
router.get('/:first', UserController.user_profile);

/* POST Routes */
router.post('/:first/update-user', UserController.update_user_post);
router.post('/:first/delete-user', UserController.delete_user_post);
router.post('/signup', UserController.sign_up_post);
router.post('/login', UserController.login_post);

module.exports = router;
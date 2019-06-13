const express = require('express'),
      router = express.Router(),
      indexController = require('../controllers/c_index');

const homePage = indexController.homePage;

/* GET home page */
router.get('/', homePage);

module.exports = router;
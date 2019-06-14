const express = require('express'),
      router = express.Router(),
      storeController = require('../controllers/c_stores');

/* GET stores page */
router.get('/', storeController.getAllStores);
router.get('/:store', storeController.getOneStore);

module.exports = router;
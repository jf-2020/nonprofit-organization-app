const express = require('express'),
      router = express.Router(),
      familyController = require('../controllers/c_family');

/* GET family list page */
router.get('/', familyController.getAllFamilies);

/* GET individual family's page */
router.get('/:family', familyController.getOneFamily);

module.exports = router;
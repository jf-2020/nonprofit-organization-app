const express = require('express'),
      router = express.Router(),
      sponsorController = require('../controllers/c_sponsor');

/* GET sponsors page */
router.get('/', sponsorController.getAllSponsors);

module.exports = router;
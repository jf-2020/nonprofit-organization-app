const express = require('express'),
      router = express.Router(),
      sponsorController = require('../controllers/c_sponsor');

/* GET sponsors page */
router.get('/', sponsorController.getAllSponsors);

/* GET sponsor profile page */
router.get('/:first_name-:last_name', sponsorController.getSponsor);

module.exports = router;
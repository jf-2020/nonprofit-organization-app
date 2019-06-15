const express = require('express'),
      router = express.Router(),
      sponsorController = require('../controllers/c_sponsor');

/* GET route for delete sponsor page */
router.get('/delete-sponsor', sponsorController.deleteSponsor_get);

/* POST route for delete sponsor  page*/
router.post('/delete-sponsor', sponsorController.deleteSponsor_post);

/* GET route for add sponsor page */
router.get('/add-sponsor', sponsorController.addSponsor_get);

/* POST route for add sponsor page */
router.post('/add-sponsor', sponsorController.addSponsor_post);

/* GET sponsor profile page */
router.get('/:first_name-:last_name', sponsorController.getSponsor);

/* GET sponsors page */
router.get('/', sponsorController.getAllSponsors);

module.exports = router;
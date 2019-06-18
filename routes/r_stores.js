const express = require('express'),
      router = express.Router(),
      storeController = require('../controllers/c_stores');

/* GET route for page for deleting a store */
router.get('/delete-store', storeController.deleteStore_get);

/* POST route for store deletion */
router.post('/delete-store', storeController.deleteStore_post);

/* GET store page for adding a store */
router.get('/add-store', storeController.addStore_get);

/* POST route for adding a store */
router.post('/add-store', storeController.addStore_post);

// /* route handlers for deleting a supply */
router.get('/:id/delete-supply', storeController.removeSupply_get);
router.post('/:id/delete-supply', storeController.removeSupply_post);

/* route handlers for adding a supply */
router.get('/:id/add-supply', storeController.addSupply_get);
router.post('/:id/add-supply', storeController.addSupply_post);

/* GET stores page */
router.get('/:store', storeController.getOneStore);
router.get('/', storeController.getAllStores);

module.exports = router;
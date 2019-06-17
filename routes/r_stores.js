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

/* GET page for adding an item to the store */
router.get('/add-store-item', storeController.addItemToStore_get);

/* POST route for adding an item to the store */
router.post('/add-store-item', storeController.addItemToStore_post);

/* GET stores page */
router.get('/:store', storeController.getOneStore);
router.get('/', storeController.getAllStores);

module.exports = router;
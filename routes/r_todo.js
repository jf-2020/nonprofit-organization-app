const express = require('express'),
      router = express.Router(),
      todoController = require('../controllers/c_todo');

router.get('/', todoController.getTodoList);
router.post('/', todoController.addToDoList);

module.exports = router;
const express = require('express'),
      router = express.Router(),
      todoController = require('../controllers/c_todo');

/* handlers for GET/POST for to-do list removal */
router.get('/remove-todo', todoController.removeTodo_get);
router.post('/remove-todo', todoController.removeTodo_post);

/* handlers for GET/POST for add to to-do list */
router.get('/add-todo', todoController.addTodo_get);
router.post('/add-todo', todoController.addTodo_post);

/* handler for GET of to-do list */
router.get('/', todoController.getTodoList);

module.exports = router;
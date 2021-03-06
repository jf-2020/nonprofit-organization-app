const express = require('express'),
      router = express.Router(),
      studentController = require('../controllers/c_student');

/* GET route for delete student page */
router.get('/delete-student', studentController.deleteStudent_get);

/* POST route for delete student  page*/
router.post('/delete-student', studentController.deleteStudent_post);

/* GET route for add student page */
router.get('/add-student', studentController.addStudent_get);

/* POST route for add student page */
router.post('/add-student', studentController.addStudent_post);

/* GET students page */
router.get('/', studentController.getAllStudents);

/* route handlers for deleting a supply */
router.get('/:id/delete-supply', studentController.removeSupply_get);
router.post('/:id/delete-supply', studentController.removeSupply_post);

/* route handlers for adding a supply */
router.get('/:id/add-supply', studentController.addSupply_get);
router.post('/:id/add-supply', studentController.addSupply_post);

/* GET student by id */
router.get('/:student', studentController.getOneStudent);

module.exports = router;
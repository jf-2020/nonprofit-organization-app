const express = require('express'),
      router = express.Router(),
      studentController = require('../controllers/c_student');

/* GET students page */
router.get('/', studentController.getAllStudents);
router.get('/:student', studentController.getOneStudent);

/* GET student by id */
router.get('/:student_id', studentController.getById);

module.exports = router;
const express = require('express'),
      router = express.Router(),
      studentController = require('../controllers/c_student');

/* GET students page */
router.get('/', studentController.getAllStudents);

/* GET student by id */
router.get('/:student', studentController.getOneStudent);

module.exports = router;
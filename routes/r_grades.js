const express = require('express'),
      router = express.Router(),
      gradeController = require('../controllers/c_grade');

/* GET stores page */
router.get('/:grade', gradeController.getOneGrade);
router.get('/', gradeController.getAllGrades);


module.exports = router;
const Grades = require('../models/m_grade');
const Supplies = require('../models/m_supplies');
const Students = require('../models/m_student');

exports.getAllGrades = async (req, res) => {
    const arrOfGrades = await Grades.getAllGrades();
    console.log("Arr of Grades :   ", arrOfGrades);

    res.render('template', {
        locals: {
            title: 'Grades List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            gradeList: arrOfGrades
        },
        partials: {
            partial: 'partial-gradesList',
            nav: 'partial-nav'
        }
    });
};

exports.getOneGrade = async (req, res) => {
    const grade_id = req.params.grade;
    console.log('grade paramater  :  ', grade_id);
    const oneGrade = await Grades.getOneGrade(grade_id);
    console.log('One Grade:    ', oneGrade);
    const allSupplies = await Supplies.getAllItemsByGradeID(grade_id);
    console.log('all Supplies    :   ', allSupplies);
    const studentCount = await Students.getStudentCountbyGradeId(grade_id);
    console.log('Student count   :   ', studentCount);

    res.render('template', {
        locals: {
            title: 'Grade Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            gradeList: oneGrade,
            suppliesList: allSupplies,
            count: studentCount
        },
        partials: {
            partial: 'partial-gradeProfile',
            nav: 'partial-nav'
        }
    })
};

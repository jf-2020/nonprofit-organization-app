const Grades = require('../models/m_grade');
const Supplies = require('../models/m_supplies');
const Students = require('../models/m_student');

exports.getAllGrades = async (req, res) => {
    const arrOfGrades = await Grades.getAllGrades();

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
    const allSupplies = await Supplies.getAllItemsByGradeID(grade_id);   
    const studentCount = await Students.getStudentCountbyGradeId(grade_id);
    const grade = await Grades.getSchoolonGradeId(grade_id);
    const totalCost = await Supplies.getTotalCostOfGrade(grade_id);
   
    res.render('template', {
        locals: {
            title: 'Grade Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            suppliesList: allSupplies,
            count: studentCount,
            gradeName: grade,
            cost: totalCost
        },
        partials: {
            partial: 'partial-gradeProfile',
            nav: 'partial-nav'
        }
    })
};
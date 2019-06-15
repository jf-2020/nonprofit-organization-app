const Grades = require('../models/m_grade');

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
    console.log("THis is the grade id #2   :    ", req.params);
    const oneGrade = await Grades.getOneGrade(grade_id);
    console.log("THis is the grade id    :    ", grade_id);   

    res.render('template', {
        locals: {
            title: 'Grade Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            gradeList: oneGrade
        },
        partials: {
            partial: 'partial-gradeProfile',
            nav: 'partial-nav'
        }
    })
};
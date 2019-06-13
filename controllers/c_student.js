const Students = require('../models/m_student');

exports.getAllStudents = async (req, res) => {
    const arrOfStudents = await Students.getAllStudents();
    console.log(arrOfStudents);
    res.render('template', {
        locals: {
            title: 'Students List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            studentList: arrOfStudents
        },
        partials: {
            partial: 'partial-studentsList',
            nav: 'partial-nav'
        }
    });
};
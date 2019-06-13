const Students = require('../models/m_student');

exports.getAllStudents = async (req, res) => {
    const students = await Students.getAllStudents();

    res.render('template', {
        locals: {
            title: 'Students List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            items: students
        },
        partials: {
            partial: 'partial-studentsList',
            nav: 'partial-nav',
        }
    });
};
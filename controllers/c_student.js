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

exports.getById = async (req, res) => {
    const id = req.params["student_id"];
    const student = await Students.getById(id);

    const first = student.First,
          last = student.Last,
          age = student.Age,
          sponsorship = student['Sponsorship Level'],
          money = student.Money;

    console.log(student);

    res.render('template', {
        locals: {
            title: 'Student Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            first: first,
            last: last,
            age: age,
            sponsorship: sponsorship,
            money: money
        },
        partials: {
            partial: 'partial-students-profile',
            nav: 'partial-nav'
        }
    });
}
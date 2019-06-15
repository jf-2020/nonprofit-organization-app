const Students = require('../models/m_student');
const Family = require('../models/m_family');
const Supplies = require('../models/m_supplies');
const Grades = require('../models/m_grade');
const Sponsors = require('../models/m_sponsor');

exports.getAllStudents = async (req, res) => {
    let arrOfStudents = await Students.getAllStudents();
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
            nav: 'partial-nav',
        }
    });
};

exports.getOneStudent = async (req, res) => {
    const student_id = req.params.student;
    const arrOfStudents = await Students.getOneStudent(student_id);
    const familyInfo = await Family.getOneFamily(student_id);
    const allSupplies = await Supplies.getAllItemsByStudentID(student_id);
    const gradeInfo = await Grades.getOneGrade(student_id);
    const sponsorInfo = await Sponsors.getSponsorById(student_id);

    res.render('template', {
        locals: {
            title: 'Student Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            studentList: arrOfStudents,
            familyName: familyInfo,
            gradeLevel: gradeInfo,
            suppliesList: allSupplies,
            sponsorName: sponsorInfo
        },
        partials: {
            partial: 'partial-studentsProfile',
            nav: 'partial-nav'
        }
    });
}


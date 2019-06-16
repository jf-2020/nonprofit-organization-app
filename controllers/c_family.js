const Family = require('../models/m_family');
const Students = require('../models/m_student');

exports.getAllFamilies = async (req, res) => {
    const arrOfFamilies = await Family.getAllFamilies();

    res.render('template', {
        locals: {
            title: 'Family List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            familyList: arrOfFamilies
        },
        partials: {
            partial: 'partial-familiesList',
            nav: 'partial-nav'
        }
    });
};

exports.getOneFamily = async (req, res) => {
    const family_id = req.params.family;
    const arrOfFamilies = await Family.getOneFamily(family_id);
    const arrOfStudents = await Students.getAllStudentsByFamilyId(family_id);
    const numOfStudents = await Students.getStudentCountbyFamilyId(family_id);
    const totalNum = await Students.getTotalAccountForFamily(family_id);
    
    res.render('template', {
        locals: {
            title: 'Family Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            familyList: arrOfFamilies,
            studentList: arrOfStudents,
            studentNum: numOfStudents,
            familyAccount: totalNum
        },
        partials: {
            partial: 'partial-familyProfile',
            nav: 'partial-nav'
        }
    });
}
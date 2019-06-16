const db = require('./conn.js');

class Grades {
    constructor(grade_id, level, school_id){
        this.grade_id = grade_id;
        this.level = level;
        this.school_id = school_id;
    }

    static async getAllGrades() {
        try {
            const queryAll = `
            SELECT 
                name,
                level,
                grade_id
            FROM
                schools,
                grades
            WHERE
                grades.school_id = schools.school_id
            `;
            const response = await db.any(queryAll);  
            console.log(response);          
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async getOneGrade(id) {
        try {
            const response = await db.one(`
            SELECT 
                name,
                level,
                grade_id
            FROM
                schools,
                grades
            WHERE
                schools.school_id = '${id}'
            AND 
                grades.grade_id = '${id}'`);
            console.log(response);
            return response;
        } catch(error) {
            return error.message;
        }
    }

}

module.exports = Grades;
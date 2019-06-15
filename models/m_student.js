const db = require('./conn.js');

class Students {
    constructor(student_id, first_name, last_name, age, sponsorship, grades_id , money, families_id, sponsors_id, link_id){

        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.sponsorship = sponsorship;
        this.grades_id = grades_id;
        this.money = money;
        this.families_id = families_id;
        this.sponsors_id = sponsors_id;
        this.link_id= link_id;
    }

    static async getAllStudentIDs() {
        try {
            const response = await db.any(`
                SELECT
                    student_id
                FROM
                    students
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getAllStudents() {
        try {
            const queryAll = `
            SELECT * FROM 
                links l, 
                students s, 
                families f 
            WHERE 
                l.families_id = f.family_id 
                AND
                l.students_id = s.student_id`;

            const response = await db.any(queryAll);
            console.log(response);
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async getAllStudentsByFamilyId(family_id) {
        try {
            const queryAll = `
            SELECT 
                first_name,
                last_name
            FROM  
                students,
                families,
                links
            WHERE
                students.student_id = links.students_id
                AND
                links.families_id = '${family_id}'
                AND 
                families.family_id = '${family_id}'`;

            const response = await db.any(queryAll);
        
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async addStudent(first_name, last_name, age, sponsorship, money) {
        const query = `INSERT INTO students
                            (first_name, last_name, age, sponsorship, money) 
                       VALUES
                            ('${first_name}', '${last_name}', '${age}', '${sponsorship}', '${money}')`
                       ;
        try {
            const response = await db.result(query);
            console.log(`Student: ${first_name} ${last_name} created`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error;
        };
    }

    static async getOneStudent(student_id) {
        try {
            const response = await db.one(`SELECT 
                                                student_id, first_name, last_name, age, sponsorship, money 
                                            FROM 
                                                students
                                            WHERE
                                                student_id = '${student_id}'`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

module.exports = Students;


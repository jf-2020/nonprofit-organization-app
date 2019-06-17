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
        this.student_photo = student_photo;
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
            SELECT 
                *
            FROM 
                links l, 
                students s, 
                families f,
                grades g 
            WHERE
                g.grade_id = s.grades_id
                AND 
                l.families_id = f.family_id 
                AND
                l.students_id = s.student_id`;

            const response = await db.any(queryAll);
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
                last_name,
                student_photo
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
            console.log(response);
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async getOneStudent(student_id) {
        try {
            const response = await db.one(`
                SELECT 
                    student_id, 
                    first_name, 
                    last_name, 
                    age, 
                    sponsorship, 
                    money,
                    student_photo 
                FROM 
                    students
                WHERE
                    student_id = '${student_id}'`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    async addStudent(linkId) {
        // in order to add a student, 2 things need to happen: first, the student must
        // be created with the appropriate unique serial key & inserted into the students
        // table. in order to do this, it's necessary to get (one way to do this, anyhow)
        // the maximum student_id in the students table, then take max+1 as the new student's
        // id. second, the newly created student needs to be inserted into the links table.
        // thus, a second db insert will be used.

        // n.b. parameter linkId: max link_id in links table
        
        const queryStudentsTable = `INSERT INTO students
                            (
                                student_id,
                                first_name,
                                last_name,
                                age,
                                sponsorship,
                                grades_id,
                                money
                            ) 
                       VALUES
                            (
                                ${this.student_id},
                                '${this.first_name}',
                                '${this.last_name}',
                                ${this.age},
                                '${this.sponsorship}',
                                null,
                                ${this.money}
                            )`;

            const queryLinksTable = `INSERT INTO links
                            (
                                link_id,
                                stores_id,
                                students_id,
                                families_id,
                                sponsors_id
                            )
                        VALUES
                            (
                                ${linkId+1},
                                null,
                                ${this.student_id},
                                0,
                                null
                            )`;
        try {
            // first, create the student per above
            const response = await db.none(queryStudentsTable);
            console.log(`Student: ${this.first_name} ${this.last_name} created`);
        } catch(error) {
            console.log("Error 1:", error.message);
            return error.message;
        };

        try {
            // second, create the linkage per above
            const response = await db.none(queryLinksTable);
            console.log(`Link: ${linkId+1} created`);
        } catch(error) {
            console.log("Error 2:", error.message);
            return error.message;
        }
    }

    async deleteStudent() {
        try {
            // first, delete from FK constrained table, links
            const student_id = await Students.getStudentIdByName(this.first_name, this.last_name);
            const response1 = await db.none(`
                DELETE FROM links
                WHERE
                    students_id = $1
            `, [student_id]);

            // second, delete from students table
            const response2 = await db.none(`
                DELETE FROM students
                WHERE
                    student_id = $1
            `, [student_id]);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getStudentIdByName(first_name, last_name) {
        // given a first name & last name, find the corresponding student
        // in the students table & return their unique student_id
        try {
            const response = await db.one(`
                                SELECT
                                    student_id
                                FROM
                                    students
                                WHERE
                                    first_name = '${first_name}'
                                    AND
                                    last_name = '${last_name}'
            `);
            return response.student_id;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getMaxId() {
        // return maximum student_id from students table
        try {
            const response = await db.one(`
                    SELECT max(student_id) FROM students;
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
        }
    }

    static async getStudentCountbyFamilyId(family_id) {
        try {
            const response = await db.one(`
            SELECT 
                COUNT (student_id) 
            FROM 
                students, 
                families, 
                links 
            WHERE 
                students.student_id = links.students_id 
                AND links.families_id = '${family_id}' 
                AND families.family_id = '${family_id}'
            `);
            console.log(response);
            return response;
        } catch(error) {
            return error.message;
        }
    }


    static async getMaxLinkId() {
        // return maximum link_id from links table
        try {
            const response = await db.one(`
                    SELECT max(link_id) FROM links;
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getTotalAccountForFamily(family_id) {
        try {
            const response = await db.one(`
            SELECT 
                SUM(students.money) 
            FROM 
                students, 
                families, 
                links 
            WHERE 
                students.student_id = links.students_id 
                AND links.families_id = '${family_id}' 
                AND families.family_id = '${family_id}'
            `);
            console.log(response);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getStudentCountbyGradeId(grade_id) {
        try {
            const response = await db.one(`
            SELECT 
                COUNT (student_id) 
            FROM 
                students, 
                grades 
            WHERE 
                students.grades_id = '${grade_id}' 
                AND grades.grade_id = '${grade_id}'
            `);
            console.log(response);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

module.exports = Students;


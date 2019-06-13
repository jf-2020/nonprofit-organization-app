const db = require('./conn.js');

class Students {
    constructor(student_id, first_name, last_name, age, sponsorship, grades_id , money, families_id, sponsors_id){
        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.sponsorship = sponsorship;
        this.grades_id = grades_id;
        this.money = money;
        this.families_id = families_id;
        this.sponsors_id = sponsors_id;
    }

    static async getAllStudents() {
        try {
            const response = await db.any(`
                                    SELECT
                                        student_id as "Student ID", 
                                        first_name as "First Name",
                                        last_name as "Last Name",
                                        age as "Age",
                                        sponsorship as "Sponsorship Level",
                                        money as "Money"
                                    FROM
                                        students`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getById(id) {
        const query = `SELECT
                            first_name as "First",
                            last_name as "Last",
                            age as "Age",
                            sponsorship as "Sponsorship Level",
                            money as "Money"
                        FROM
                            students
                        WHERE
                            student_id = ${id}`
                      ;
        try {
            const response = await db.one(query);
            console.log(`Student: ${response.First} ${response.Last} retrieved`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
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
            const response = await db.one(`SELECT student_id, first_name, last_name, age, sponsorship, money FROM students WHERE students.student_id = '${student_id}'`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

}

module.exports = Students;
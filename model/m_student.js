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

    static async getAll() {
        try {
            const response = await db.any(`select * from businesstb`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async update(name, address, street, city, state, menu) {
        const query = `INSERT INTO restaurantstb (name, address, street, city, state, menu) VALUES ('${name}', '${address}', '${street}', '${city}', '${state}', '${menu}')`;

        try {
            let response = await db.result(query);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }

}

module.exports = Students;
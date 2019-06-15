const db = require('./conn.js');

class Supplies {
    constructor(supply_id, supply_name, unit_cost, student_id, store_id, grade_id){
        this.supply_id = supply_id;
        this.supply_name = supply_name;
        this.unit_cost = unit_cost;
        this.student_id = student_id;
        this.store_id = store_id;
        this.grade_id = grade_id;
    }

    static async getAllItemsByStoreID(storeSelected) {
        try {
            const response = await db.any(`
            SELECT 
                supply_id,
                supply_name,
                unit_cost,
                quantity
            FROM
                supplies
            WHERE
                supplies.store_id = '${storeSelected}'
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getAllItemsByGradeID(gradeSelected) {
        try {
            const response = await db.any(`
            SELECT 
                supply_id,
                supply_name,
                unit_cost,
                quantity
            FROM
                supplies
            WHERE
                supplies.grade_id = '${gradeSelected}'
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getAllItemsByStudentID(studentSelected) {
        try {
            const response = await db.any(`
            SELECT 
                supply_id,
                supply_name,
                unit_cost,
                quantity
            FROM
                supplies
            WHERE
                supplies.student_id = '${studentSelected}'
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

}

module.exports = Supplies;
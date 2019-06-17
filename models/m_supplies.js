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

    static async getTotalCostOfGrade(grade_id) {
        try {
            const response = await db.one(`
            SELECT 
                SUM(supplies.unit_cost) 
            FROM 
                supplies, 
                grades 
            WHERE 
                grades.grade_id = '${grade_id}'  
                AND supplies.grade_id = grades.grade_id
            `);
            console.log(response);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async addItemToStore() {
            try {
                const response = await db.one(`
                    INSERT INTO supplies
                        (
                            supply_name,
                            unit_cost,
                            quantity,
                            store_id
                        )
                    VALUES
                        ($1, $2, $3, $4)
                    RETURNING
                        supply_name,
                        unit_cost,
                        quantity,
                        store_id
                `, [this.supply_name, this.unit_cost, this.quantity, this.store_id]);
                console.log(`New item, ${response}`);
                return response;
        } catch(error) {
            return error.message;
        }
    }

}

module.exports = Supplies;
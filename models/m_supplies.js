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
// function to be able to get all the items (supply_id, supply_name, unit_cost, quantity), by store_id
// function to get all that by student_id 
// function to get all that by grade_id

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

}

module.exports = Supplies;
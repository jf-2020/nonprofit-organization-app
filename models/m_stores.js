const db = require('./conn.js');

class Stores {
    constructor(store_id, name, location){
        this.store_id = store_id;
        this.name = name;
        this.location = location;
    }

    static async getAllStores() {
        try {
            const queryAll = `
            SELECT * 
            FROM stores
            `;

            const response = await db.any(queryAll);
            
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async getOneStore(store_id) {
        try {
            const response = await db.one(`
            SELECT 
                store_id, 
                name, 
                location 
            FROM stores 
            WHERE store_id = '${store_id}'`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

}

module.exports = Stores;
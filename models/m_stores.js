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

    async addStore() {
        try {
            const response = await db.one(`
                INSERT INTO stores
                    (
                        store_id,
                        name,
                        location
                    )
                VALUES
                    ($1, $2, $3)
                RETURNING
                        name
            `, [this.store_id, this.name, this.location]);
            console.log(`Store was created with name, ${response.name}`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    async deleteStore() {
        console.log("here");
        try {
            // first, delete from FK constrained table, supplies
            const store_id = await Stores.getStoreIdByName(this.name);
            console.log(store_id);
            const response1 = await db.none(`
                DELETE FROM supplies
                WHERE
                    store_id = $1
                `, [store_id]);

            // then, delete from stores table
            const response2 = await db.none(`
                DELETE FROM stores
                WHERE
                    store_id = $1
            `, [store_id]);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async addItemToStore(supply_name, unit_cost, quantity, store_id) {
        // first, get maximum supply id
        const supply_id = await Stores.getMaxSupplyId();

        // then insert into db with said id+1
        try {
            const response = await db.none(`
                INSERT INTO supplies
                    (supply_id, supply_name, unit_cost, quantity, store_id)
                VALUES
                    (${supply_id+1}, '${supply_name}', ${unit_cost}, ${quantity}, ${store_id}) 
            `);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async removeSupplyByStoreId(store_id, item) {
        const query = `DELETE FROM 
                                supplies
                            WHERE
                                store_id = ${store_id}
                            AND
                                supply_name = '${item}'`;

        try {
            const response = await db.none(query);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getMaxSupplyId() {
        // get the current maximum supply id
        const query = `SELECT max(supply_id) FROM supplies`;

        try {
            const response = await db.one(query);
            return response.max;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getStoreIdByName(name) {
        // given the name of the store, return the store_id in the stores
        // table corresponding to said store
        try {
            const response = await db.one(`
                SELECT
                    store_id
                FROM
                    stores
                WHERE
                    name = '${name}'
            `);
            return response.store_id;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getMaxStoreId() {
        // get the maximum store_id of the stores table
        try {
            const response = await db.one(`
                    SELECT max(store_id) FROM stores;
            `);
            return response.max;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }



}

module.exports = Stores;
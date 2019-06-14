const db = require('./conn.js');

class Family {
    constructor(family_id, name, size, location, church_affiliation , money){
        this.family_id = family_id;
        this.name = name;
        this.size = size;
        this.location = location;
        this.church_affiliation = church_affiliation;
        this.money = money;
    }

    static async getAllFamilies() {
        try {
            const response = await db.any(`SELECT * FROM families`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getOneFamily(family_id) {
        try {
            const response = await db.one(`SELECT family_id, name, size, location, church_affiliation , money FROM families WHERE family_id = '${family_id}'`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

}

module.exports = Family;
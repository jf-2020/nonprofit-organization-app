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
            const response = await db.any(`select * from families`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getOneFamily(family_id) {
        try {
            const response = await db.one(`SELECT family_id, name, size, location, church_affiliation , money FROM families WHERE families.family_id = '${family_id}'`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

}

module.exports = Family;
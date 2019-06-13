const db = require('./conn.js');

class Sponsor {
    constructor(
        sponsor_id,
        first_name,
        last_name,
        email,
        phone,
        money_donated,
        date_paid,
        date_deposited,
        photo,
        link_id
    ) {
        this.sponsor_id = sponsor_id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.phone = phone,
        this.money_donated = money_donated,
        this.date_paid = date_paid,
        this.date_deposited = date_deposited,
        this.photo = photo,
        this.link_id = link_id
    }

    static async getAllSponsors() {
        try {
            const response = await db.any(`
                                    SELECT
                                        photo as "Photo",
                                        first_name as "First Name",
                                        last_name as "Last Name",
                                        email as "Email",
                                        phone as "Phone",
                                        money_donated as "Donation",
                                        date_paid as "Given On",
                                        date_deposited as "Received On"
                                    FROM
                                        sponsors`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    async addSponsor() {
        try {
            const response = await db.one(`
                INSERT INTO sponsors
                    (
                    first_name,
                    last_name,
                    email,
                    phone,
                    money_donated,
                    date_paid,
                    date_deposited,
                    photo,
                    link_id
                    )
                 VALUES
                    ()
                RETURNING
                    first_name,
                    last_name
            `, Object.keys(this).slice(1));
            console.log(`Sponsor was created with first name, ${response.first_name}, and last name, ${response.last_name}`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }
}

module.exports = Sponsor;
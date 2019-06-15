const db = require('./conn.js'),
      Students = require('./m_student');

class Sponsor {
    constructor(
        sponsor_id, first_name, last_name, email,
        phone, money_donated, date_paid, date_deposited,
        photo, link_id
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

    static async getSponsorIdByName(name) {
        try {
            const response = await db.one(`
                                SELECT
                                    sponsor_id
                                FROM
                                    sponsors
                                WHERE
                                    first_name = '${name}'
            `);
            return response.sponsor_id;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getSponsorPhotoByName(name) {
        try {
            const response = await db.one(`
                                    SELECT
                                        photo
                                    FROM
                                        sponsors
                                    WHERE
                                        first_name = '${name}'
            `);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
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

    static async getSponseesByName(first) {
        try {
            // get id of sponsor with first_name == first
            const idObject = await db.one(`
                                    SELECT
                                        sponsor_id
                                    FROM
                                        sponsors
                                    WHERE
                                        first_name = '${first}'
            `);
            
            // then get array of all students, whose values are objects with the ids stored within
            const sponseesIDs = await db.any(`
                                    SELECT
                                        students_id
                                    FROM
                                        links
                                    WHERE
                                        sponsors_id = ${idObject['sponsor_id']}
            `);
            
            // extract the ids into an array
            const arrayOfSponseeIDs = [];
            sponseesIDs.forEach( (obj) => {
                arrayOfSponseeIDs.push(obj["students_id"]);
            });
            
            // extract the names of the students by id into an array via asynced function
            async function getNamesAsync (ids) {
                const arrayOfNames = [];
                for (const id of ids) {
                    const {first_name, last_name} = await Students.getOneStudent(id);
                    arrayOfNames.push(first_name + " " + last_name);
                }
                return arrayOfNames;
            }
            const arrayOfSponseesNames = await getNamesAsync(arrayOfSponseeIDs);
            
            return arrayOfSponseesNames;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    async addSponsor() {
        try {
            console.log("here");
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
                    ( $1, $2, $3, $4, $5, $6, $7, $8, null )
                RETURNING
                    first_name, last_name
            `, [this.first_name, this.last_name, this.email,
                this.phone, this.donation, this.donation_date,
                this.deposit_date, this.photo]);    
            console.log(`Sponsor was created with first name, ${response.first_name}, and last name, ${response.last_name}`);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    async deleteSponsor() {
        try {
            // first, delete from FK constrained table, links
            const sponsor_id = await Sponsor.getSponsorIdByName(this.first_name);
            const response1 = await db.none(`
                DELETE FROM links
                WHERE
                    sponsors_id = $1
            `, [sponsor_id]);

            // then, delete from sponsors table
            const response2 = await db.none(`
                DELETE FROM sponsors
                WHERE
                    sponsor_id = $1
            `, [sponsor_id]);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }
}

module.exports = Sponsor;


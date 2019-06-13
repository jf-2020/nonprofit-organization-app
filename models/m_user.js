const db = require('./conn.js');

class User {
    constructor(
        user_id,
        password,
        first_name,
        last_name,
        email,
        phone,
        photo,
        user_type
    ) {
        this.user_id = user_id,
        this.password = password,
	    this.first_name = first_name,
	    this.last_name= last_name,
	    this.email 	= email ,
	    this.phone = phone,
	    this.photo = photo,
	    this.user_type = user_type
    }

    async create() {
        try {
            const response = await db.one(`
                insert into users 
                    (
                    password,
                    first_name,
                    last_name,
                    email,
                    phone,
                    photo,
                    user_type
                    ) 
                values 
                    ($1, $2, $3, $4, null, null, null)
                returning email
                `, [this.password, this.first_name, this.last_name, this.email]);
            console.log("user was created with email:", response.email);
            return response;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    async getUserByEmail() {
        try {
            const response = await db.one(`
                SELECT
                    user_id,
                    password,
                    first_name,
                    last_name,
                    email,
                    phone,
                    photo,
                    user_type
                FROM
                    users
                WHERE
                    email = $1
            `, [this.email]
            );
            console.log("User:", response);
            return response;
        } catch (error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }
}

module.exports = User;
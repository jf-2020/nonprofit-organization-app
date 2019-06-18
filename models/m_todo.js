const db = require('./conn.js');

class Todos {
    constructor(item_id, todo_text, due_date, people_assigned, date_completed){
        this.item_id = item_id;
        this.todo_text = todo_text;
        this.due_date = due_date;
        this.people_assigned = people_assigned;
        this.date_completed = date_completed;
    }

    static async getAllTodo() {
        try {
            const queryAll = `
            SELECT 
                *
            FROM
                todo
            `;
            const response = await db.any(queryAll);  
            console.log(response);          
            return response;
        }catch(error) {
            return error.message;
        }
    }

    static async addToDo(todo_text, due_date, people_assigned, date_completed) {
        // first, get max todo_id from todo table -> use this for item_id insertion
        const maxId = await Todos.getMaxId();

        // then, perform the insert into table using the maximum id + 1
        const query = `
        INSERT INTO 
            todo (todo_id, todo_text, due_date, people_assigned, date_completed) 
        VALUES 
            (${maxId+1}, '${todo_text}', '${due_date}', '${people_assigned}', '${date_completed}')`;

        try {
            const response = await db.one(query);
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        };
    }

    async deleteToDo() {
        // delete an item from the todo list via its todo_id
        const id = await Todos.getId(this.todo_text, this.people_assigned);
        console.log("id:", id);

        try {
            const response = await db.none(`
                DELETE FROM todo
                WHERE
                    todo_id = ${id}
            `);
            console.log("done");
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getId(todo_text, people_assigned) {
        // get the todo_id of the todo given it's todo_text and people_assigned
        const query = `
                SELECT
                    todo_id
                FROM
                    todo
                WHERE
                    todo_text = '${todo_text}'
                AND
                    people_assigned = '${people_assigned}'
        `;

        try {
            const response = await db.one(query);
            return response.todo_id;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }

    static async getMaxId() {
        // get max todo_id from todo table
        const query = `SELECT max(todo_id) FROM todo`;
        
        try {
            const response = await db.one(query);
            return response.max;
        } catch(error) {
            console.log("Error:", error.message);
            return error.message;
        }
    }
}

module.exports = Todos;
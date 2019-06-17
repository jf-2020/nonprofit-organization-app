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
        const query = `
        INSERT INTO 
            todo (todo_text, due_date, people_assigned, date_completed) 
        VALUES 
            ('${todo_text}', '${due_date}', '${people_assigned}', '${date_completed}')`;

        try {
            let response = await db.one(query);
            console.log('this is the response todo:   ', response);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }
}

module.exports = Todos;
const Todos = require('../models/m_todo');

exports.getTodoList = async (req, res) => {
    const arrOfTodo = await Todos.getAllTodo();

    res.render('template', {
        locals: {
            title: 'To-Do List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            todoList: arrOfTodo
        },
        partials: {
            partial: 'partial-todoList',
            nav: 'partial-nav'
        }
    });
};

exports.addToDoList = async function(req, res) {
    const {todo_text, due_date, people_assigned, date_completed} = req.body;
    console.log(people_assigned);
    const arrOfTodo = await Todos.getAllTodo();
    console.log("THis is arrrrrrr    :   ", arrOfTodo);
    
    const addNew = await Todos.addToDo(todo_text, due_date, people_assigned, date_completed);
    console.log("THis is add New    :   ", addNew);
    

    res.render('template', {
        locals: {
            title: 'To-Do List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            todoList: arrOfTodo,
            addMore: addNew
        },
        partials: {
            partial: 'partial-todoList',
            nav: 'partial-nav'
        }
    });
}




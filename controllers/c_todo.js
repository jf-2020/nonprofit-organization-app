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

exports.addTodo_get = async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Add To-Do',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-add-todo',
            nav: 'partial-nav'
        }
    });
}

exports.addTodo_post = async (req, res) => {
    const {todo_text, due_date, people_assigned, date_completed} = req.body;
    
    Todos.addToDo(todo_text, due_date, people_assigned, date_completed)
    .then(() => {
        console.log("success!");
        res.redirect('/to-do-list');
    });
}

exports.removeTodo_get = async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Remove To-Do',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-remove-todo',
            nav: 'partial-nav'
        }
    });
}

exports.removeTodo_post = async (req, res) => {
    const { todo_text, people_assigned } = req.body;
    const todo = new Todos(null, todo_text, null, people_assigned, null);

    todo.deleteToDo().then(() => {
        res.redirect('/to-do-list');
    });
}
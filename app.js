const express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      es6Renderer = require('express-es6-template-engine'),
      session = require('express-session')
      FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/r_index'),
      studentsRouter = require('./routes/r_student'),
      sponsorsRouter = require('./routes/r_sponsors'),
      usersRouter = require('./routes/r_users'),
      familiesRouter = require('./routes/r_family'),
      gradesRouter = require('./routes/r_grades'),
      storesRouter = require('./routes/r_stores'),
      todoRouter = require('./routes/r_todo');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store: new FileStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    is_logged_in: false
}));

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/sponsors', sponsorsRouter);
app.use('/users', usersRouter);
app.use('/families', familiesRouter);
app.use('/stores', storesRouter);
app.use('/grades', gradesRouter);
app.use('/to-do-list', todoRouter);

module.exports = app;


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const requestLogs = require('./middleware/request');

const exampleMiddleware = require('./middleware/example');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(exampleMiddleware);

app.use(requestLogs);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

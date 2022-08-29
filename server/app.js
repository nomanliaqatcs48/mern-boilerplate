const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const requestLogs = require('./middleware/request');

const exampleMiddleware = require('./middleware/example');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

const app = express();

app.use(exampleMiddleware);

app.use(cors(corsOptions));
app.use(requestLogs);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

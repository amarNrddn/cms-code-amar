const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require("cors")
const path = require('path')
const app = express()
const logger = require('morgan');
const compresson = require('compression')

app.use(compresson())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

const routeMyJobs = require('./app/api/my_jobs.js/route')
const routeBlog = require('./app/api/blog/route')

const v1 = '/code-amar/v1'

app.use(`${v1}/`, routeMyJobs)
app.use(`${v1}/`, routeBlog)

module.exports = app

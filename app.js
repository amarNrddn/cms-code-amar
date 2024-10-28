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
const routeProject = require('./app/api/projects/route')
const routeFeature = require('./app/api/feature/route')
const routeTechstack = require('./app/api/techstack/route')

const v1 = '/code-amar/v1'

app.use(`${v1}/`, routeMyJobs)
app.use(`${v1}/`, routeBlog)
app.use(`${v1}/`, routeProject)
app.use(`${v1}/`, routeFeature)
app.use(`${v1}/`, routeTechstack)

module.exports = app

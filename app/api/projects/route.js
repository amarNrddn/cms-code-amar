const express = require('express')
const route = express()

const { create, getAll, getOne } = require('./controller')
const upload = require('../../middlewares/uploadImages')

route.post('/project', upload.single('thumbnail'), create)
route.get('/project', getAll)
route.get('/project/:slug', getOne)

module.exports = route
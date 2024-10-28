const express = require('express')
const route = express()

const { create, getAll } = require('./controller')
const upload = require('../../middlewares/uploadImages')

route.post('/project', upload.single('thumbnail'), create)
route.get('/project', getAll)

module.exports = route
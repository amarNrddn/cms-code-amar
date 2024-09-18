const express = require('express')
const route = express()

const { create, getAll } = require('./controller')
const upload = require('../../middlewares/uploadImages')

route.post('/blog', upload.single('thumbnail'), create)
route.get('/blog', getAll)

module.exports = route
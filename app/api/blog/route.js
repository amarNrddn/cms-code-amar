const express = require('express')
const route = express()

const { create, getAll, getOne } = require('./controller')
const upload = require('../../middlewares/uploadImages')

route.post('/blog', upload.single('thumbnail'), create)
route.get('/blog', getAll)
route.get('/blog/:slug', getOne)

module.exports = route
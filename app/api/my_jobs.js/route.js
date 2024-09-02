const express = require('express')
const route = express()

const { create, getAll } = require('./controler')

route.post('/myjobs', create)
route.get('/myjobs', getAll)

module.exports = route
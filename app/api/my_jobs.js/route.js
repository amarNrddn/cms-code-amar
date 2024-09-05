const express = require('express')
const route = express()

const { create, getAll, update, destroyservices } = require('./controler')

route.post('/myjobs', create)
route.get('/myjobs', getAll)
// route.put('/myjobs/:id', update)
// route.delete('/myjobs/:id', destroyservices)

module.exports = route
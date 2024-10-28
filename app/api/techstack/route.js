const express = require('express')
const route = express()

const { create } = require('./controller')

route.post('/techstack', create)

module.exports = route
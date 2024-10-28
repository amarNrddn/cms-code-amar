const express = require('express')
const route = express()

const { create } = require('./controller')

route.post('/feature', create)

module.exports = route
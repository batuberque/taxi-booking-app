const express = require('express')
const bodyParser = require('body-parser')
require('./mongo-connection')


const app = express()
app.use(bodyParser.json())
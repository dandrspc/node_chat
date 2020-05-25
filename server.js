require('dotenv').config()
const config = require('./config')

const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const { connect, socket } = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(config.mongoUrl)

app.use(bodyParser.json())
connect(server)
router(app)

app.use(config.publicRoute, express.static('public'))
server.listen(config.port, () => {
    console.log(`Server is listening at ${config.host}:${config.PORT}`)
})
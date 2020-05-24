require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

const MONGO_URI = process.env.MONGO_URI
db(MONGO_URI)

var app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

router(app)

app.use('/app', express.static('public'))
app.listen(PORT, () => {
    console.log('Server is listening at http://localhost:3000')
})
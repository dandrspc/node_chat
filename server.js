require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const router = require('./network/routes')

var app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())

router(app)

app.use('/app', express.static('public'))

app.listen(PORT, () => {
    console.log('Server is listening at http://localhost:3000')
})
const express = require('express')
const bodyParser = require('body-parser')

const response = require('./network/response')

const router = express.Router()

var app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Our personal value"
    })
    response.success(req, res, "Message List")
})

router.post('/message', function (req, res) {
    console.log(req.body)   //get body
    console.log(req.query)  //get URL query arguments
    if (req.query.error == 'ok') {
        response.error(req, res, 'Simulated Error', 400)
    } else {
        response.success(req, res, "Created", 201)
    }

})

app.listen(PORT, () => {
    console.log('Server is listening at http://localhost:3000')
})
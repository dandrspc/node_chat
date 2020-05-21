const express = require('express')
const bodyParser = require('body-parser')
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
    res.send('Message List')
})

router.post('/message', function (req, res) {
    console.log(req.body)   //get body
    console.log(req.query)  //get URL query arguments
    res.status(201).send({
        error: '',
        body: 'Created'
    })
})

app.listen(PORT, () => {
    console.log('Server is listening at http://localhost:3000')
})
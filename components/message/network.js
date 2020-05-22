const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Our personal value"
    })
    response.success(req, res, "Message List")
})

router.post('/', function (req, res) {
    console.log(req.body)   //get body
    console.log(req.query)  //get URL query arguments
    if (req.query.error == 'ok') {
        response.error(req, res, 'Unexpected Error', 400,
            'It is just an error simulation')
    } else {
        response.success(req, res, "Created", 201)
    }

})

module.exports = router
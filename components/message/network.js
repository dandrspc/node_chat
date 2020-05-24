const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    controller.getMessages()
        .then(messageList => {
            response.success(req, res, messageList, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err)
        })
})

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(err => {
            response.error(req, res, 'Invalid Information', 500, err)
        })

})

router.patch('/:id', function (req, res) {
    console.log(`request from ${req.ip} --- [${req.method}] ${req.url}`)
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500)
        })
})

module.exports = router
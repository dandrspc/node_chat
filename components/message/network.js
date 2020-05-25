const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then(messageList => {
            response.success(req, res, messageList, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err)
        })
})

router.post('/', function (req, res) {
    const { chat, user, message } = req.body
    controller.addMessage(chat, user, message)
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

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(deletedCount => {
            response.success(req, res, `deletedCount: ${deletedCount}`, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err)
        })
})

module.exports = router
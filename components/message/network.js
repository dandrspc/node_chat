const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const upload = multer({
    dest: 'public/files'
})

router.get('/', (req, res) => {
    const chat = req.query.chat || null

    controller.getMessages(chat)
        .then(messageList => {
            response.success(req, res, messageList, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err)
        })
})

router.post('/', upload.single('file'), function (req, res) {

    const { chat, user, message } = req.body
    const file = req.file
    controller.addMessage(chat, user, message, file)
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
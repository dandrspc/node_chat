const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
    controller.createChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.get('/:user', (req, res) => {
    controller.getChats(req.params.user)
        .then(chats => {
            response.success(req, res, chats, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err)
        })
})

module.exports = router
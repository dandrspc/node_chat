const messageRouter = require('../components/message/network')

const routes = function (server) {
    server.use('/message', messageRouter)
}

module.exports = routes
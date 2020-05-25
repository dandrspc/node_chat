const store = require('./store')

function createChat(users) {
    if (!(users && Array.isArray(users))) {
        return Promise.reject('Invalid params')
    }

    const chat = {
        users: users
    }
    return store.createChat(chat)
}

function getChats(userId) {
    return store.getChats(userId)
}

module.exports = {
    createChat,
    getChats,
}
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

function getChats() {
    return store.getChats()
}

module.exports = {
    createChat,
    getChats,
}
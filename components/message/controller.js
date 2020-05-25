const store = require('./store')

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if (!(chat && user) || !message) {
            console.error('[messageController] No user, chatId or message')
            reject('Wrong data')
            return false
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filter) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!(id && message)) {
            reject('Invalid data')
            return false
        }

        result = await store.updateMessage(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid Id')
            return false
        }

        result = await store.remove(id)
            .then(({ deletedCount }) => {
                console.log(`${deletedCount} message(s) removed from db`)
                resolve(deletedCount)
            })
            .catch(e => { reject(e) })
        resolve(result)
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}
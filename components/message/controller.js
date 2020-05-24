const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No user o message')
            reject('Wrong data')
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
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
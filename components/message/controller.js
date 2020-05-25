const store = require('./store')

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!(chat && user) || !message) {
            console.error('[messageController] No user, chatId or message')
            reject('Wrong data')
            return false
        }

        let fileUrl = ''
        if (file) {
            fileUrl = 'http://localhost:3000/app/files' + file.filename
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
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
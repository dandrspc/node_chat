const db = require('mongoose')
const Model = require('./model')

const MONGO_URI = process.env.MONGO_URI
db.Promise = global.Promise
db.connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('[db] database connected successfully')
    })
    .catch(err => {
        console.log('[db] database failed to connect ' + err)
    })

const list = []

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages() {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages,
}
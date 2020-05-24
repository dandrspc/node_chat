const Model = require('./model')

function createChat(users) {
    const newChat = new Model(users)
    return newChat.save()
}

function getChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (userId) {
            filter = {
                users: userId
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if (err) {
                    reject(err)
                    return false
                }
                resolve(populated)
            })
    })


}

module.exports = {
    createChat,
    getChats,
}
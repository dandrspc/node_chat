const Model = require('./model')

function addUser(user) {
    const newUser = new Model(user)
    return newUser.save()
}

module.exports = {
    addUser,
}
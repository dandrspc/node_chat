const store = require('./store')

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name')
    }
    const user = {
        name: name,
    }

    return store.addUser(user)
}


function getUsers() {
    return store.getUsers()
}

module.exports = {
    addUser,
    getUsers,
}
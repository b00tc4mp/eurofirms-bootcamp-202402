// data layer
var data = (function () {
    // helpers

    function loadUsers() {
        return JSON.parse(localStorage.users || '[]')
    }
    function saveUsers(users) {
        localStorage.users = JSON.stringify(users)

    }

    function loadMessages() {
        return JSON.parse(localStorage.messages || '[]')
    }

    function saveMessages(messages) {
        localStorage.messages = JSON.stringify(messages)
    }

    // data

    function findUser(callback) {
        var users = loadUsers()

        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            var matches = callback(user)

            if (matches) return user
        }
    }

    function insertUser(user) {
        var users = loadUsers()
        user.id = parseInt(Math.random() * 1000000000000000000).toString(36)

        users[users.length] = user
        saveUsers(users)

    }

    function updateUser(user) {
        var users = loadUsers()

        var index = users.findIndex(function (user2) {
            return user2.id === user.id
        })

        users.splice(index, 1, user)

        saveUsers(users)
    }

    function findUsers(callback) {
        var users = loadUsers()

        var filtered = users.filter(callback)

        return filtered
    }

    function printUsers() {
        var users = loadUsers()

        console.table(users)
    }

    function getAllUsers() {
        var users = loadUsers()
        return users
    }

    function printMessages() {
        var messages = loadMessages()

        console.table(messages)
    }
    function insertMessage(message) {
        var messages = loadMessages()

        messages.push(message)
        saveMessages(messages)
    }

    function findMessages(callback) {
        var messages = loadMessages()

        var filtered = messages.filter(callback)
        return filtered
    }

    return {
        findUser: findUser,
        insertUser: insertUser,
        updateUser: updateUser,
        findUsers: findUsers,
        printUsers: printUsers,
        getAllUsers: getAllUsers,
        printMessages: printMessages,
        insertMessage: insertMessage,
        findMessages: findMessages
    }
})()
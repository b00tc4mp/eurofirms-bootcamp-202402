//data layer

var data = (function () {
    //helpers

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

    //data

    function findUser(callback) {
        var users = loadUsers()
        //look in users (localStorage for all registered users)
        for (var i = 0; i < users.length; i++) {
            //put aside the data of users on each iteration
            var user = users[i]

            var matches = callback(user)
            //if the input username matches the name of an user in our users (localStorage) 
            if (matches) return user //then take them aside

        }
    }

    function insertUser(user) {
        //adds the new user into the storage of users -> users []

        var users = loadUsers()

        user.id = parseInt(Math.random() * 1000000000000000000).toString(36)

        users[users.length] = user
        //pull data into localStorage to not lose it

        //localStorage.users = JSON.stringify(users)
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
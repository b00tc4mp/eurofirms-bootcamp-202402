// data layer
var data = (function() {
    // helpers

    function parseUsers() {
        return JSON.parse(localStorage.users || '[]')
    }

    // data

    function findUser(callback) {
        var users = parseUsers()

        for (var i = 0; i < users.length; i++) {
            var user = users[i]

        var matches = callback(user)

        if (matches) return user
    }
}

function insertUser(user) {
    var users = parseUsers()
  
    user.id = parseInt(Math.random() * 1000000000000000000).toString(36)

    users[users.length] = user

    localStorage.users = JSON.stringify(users)
}
function saveUser(user) {
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

return {
    findUser: findUser,
    insertUser: insertUser,
    saveUser: saveUser,
    findUsers: findUsers
}
})()

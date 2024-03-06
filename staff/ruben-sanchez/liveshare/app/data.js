var data = (function () {
    // helpers

    function parseUsers() {
        return JSON.parse(localStorage.users || '[]')
    }
// data
function findUser(callback) {
    var users = parseUsers()

    for(var i=0; i < users.length; i++) {
        var user = users[i]

        var matches = callback(user)

        if (matches) return user

    }
}

function insertUser(user) {
    var users = parseUsers()

    user.id = parseInt(Math.random()*10^18).toString(36)

    users[users.length] = user

    localStorage.users = JSON.stringify(users)
}



return {
    findUser:   findUser,
    insertUser: insertUser
}


})()


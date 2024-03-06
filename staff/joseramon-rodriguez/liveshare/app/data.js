//data layer

var data = (function () {
    //helpers

    function loadUsers() {
        return JSON.parse(localStorage.users || '[]')
    }

    function saveUsers(users) {
        localStorage.users = JSON.stringify(users)
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
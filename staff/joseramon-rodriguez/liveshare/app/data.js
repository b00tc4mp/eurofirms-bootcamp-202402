//data layer

function findUser(callback) {
    var users = JSON.parse(localStorage.users || '[]')
    //look in users (localStorage for all registered users)
    for (var i = 0; i < users.length; i++) {
        //put aside the data of users on each iteration
        var user = users[i]

        var matches = callback(user)
        //if the input username matches the name of an user in our users (localStorage) 
        if (matches)
            //then take them aside
            return user

    }
}

function insertUser(user) {
    //adds the new user into the storage of users -> users []

    var users = JSON.parse(localStorage.users || '[]')

    user.id = parseInt(Math.random() * 1000000000000000000).toString(36)

    users[users.length] = user
    //pull data into localStorage to not lose it

    localStorage.users = JSON.stringify(users)
}

//bussines layer(logic)

var logic = (function () {
    //helpers

    function validateName(name) {
        if (name.length < 1) {
            throw new Error('name is lower than 1 character')
        }
        var nameIsBlank = true

        for (var i = 0; i < name.length && nameIsBlank; i++) {
            var char = name[i];

            if (char !== " ") {
                nameIsBlank = false
            }
        }

        if (nameIsBlank) {
            throw new Error('name is blank')

        }
    }



    function validateBirthdate(birthdate) {
        if (birthdate.length !== 10) {
            throw new Error('name does not have 10 characters')
        }

        if (birthdate.includes(' ')) {
            throw new Error('birthdate has a space character')
        }

        if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7) {
            throw new Error(' birthdate dashes are not correct position')
        }
    }

    function validateUsername(username) {
        if (username.length < 3) {
            throw new Error('username is lower than 3 characters')
        }
        if (username.includes(' ')) {
            throw new Error('username has a space character')

        }
    }

    function validateEmail(email) {

        if (email.length < 6) {
            throw new Error('email is lower than 6 characters')
        }

        if (!email.includes('@')) {
            throw Error('email has no @')
        }

        if (!email.includes('.')) {
            throw Error('email has no .')
        }

        if (email.lastIndexOf('.') < email.indexOf('@')) {
            throw Error('email has . before @')
        }

        if (email.lastIndexOf('.') - email.indexOf('@') < 2) {
            throw Error('email has . next to @')
        }

        if (email.length - 1 - email.indexOf('.') < 2) {
            throw Error('email domain is lower than 2 characters')

        }

        if (email.includes(' ')) {
            throw new Error('email has a space character')
        }

    }

    function validatePassword(password) {
        if (password.length < 8) {
            throw new Error('password is lower than 8  characters')
        }


        if (password.includes(' ')) {
            throw Error('password has a space character')
        }
    }



    function registerUser(name, birthdate, username, email, password) {
        validateName(name)
        validateBirthdate(birthdate)
        validateUsername(username)
        validateEmail(email)
        validatePassword(password)

        var user = data.findUser(function (user) {
            return user.username === username || user.email === email
        })

        if (user !== undefined) {
            throw new Error('user already exitsts')
        }

        var user = {
            name: name,
            birthdate: birthdate,
            username: username,
            email: email,
            password: password
        }

        data.insertUser(user)

    }





    function loginUser(username, password) {

        validateUsername(username)
        validatePassword(password)


        var user = data.findUser(function (user) {
            return user.username === username
        })


        if (user === undefined) {
            throw new Error('user not found')
        }

        if (user.password !== password) {
            throw new Error('wrong password')

        }

        sessionStorage.userId = user.id

        user.online = true

        data.saveUser(user)

    }

    function retrieveUser() {

        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (user === undefined) {
            throw new Error('user not found')
        }

        return user

    }

    function logoutUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        user.online = false

        data.saveUser(user)


        delete sessionStorage.userId
    }

    function retrieveOnlineUsers() {
        var users = data.findUsers(function (user) {
            return user.online
        })


        users.forEach(function (user) {
            delete user.name
            delete user.birthdate
            delete user.email
            delete user.password
            delete user.online
        })

        return users

    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        retrieveOnlineUsers: retrieveOnlineUsers
    }
})()

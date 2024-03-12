var logic = (function () {    //IFFE
    //helpers
    function validateName(name) {   //name
        if (name.length < 1)
            throw new Error('name is lower, write more characters, please')

        var nameIsBlank = true

        for (var i = 0; i < name.length && nameIsBlank; i++) {
            var char = name[i]

            if (char !== ' ')
                nameIsBlank = false
        }

        if (nameIsBlank)
            throw new Error('name is blank')
    }

    function validateLastname(lastname) {     //lastname
        if (lastname.length < 2)
            throw new Error('lastname is lower, write more character, please')

        var lastnameIsBlank = true

        for (var i = 0; i < lastname.length && lastnameIsBlank; i++) {
            var char = lastname[i]

            if (char !== ' ')
                lastnameIsBlank = false
        }

        if (lastnameIsBlank)
            throw new Error('lastname is blank')
    }

    function validateBirthdate(birthdate) {     //birthday
        if (birthdate.length !== 10)
            throw new Error('birthdate has not 10 characters')

        if (birthdate.includes(' '))
            throw new Error('birthdate has a space character, delete it, please')

        if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
            throw new Error('birthdate has not correct structure')
    }

    function validateUsername(username) {   //username
        if (username.length < 3)
            throw new Error('username is lower. Write more character, please')

        if (username.includes(' '))
            throw new Error('You use space character. Delete it, please')
    }

    function validateEmail(email) {   //email
        if (email.length < 6)
            throw new Error('email is lower than 6 characters')

        if (!email.includes('@'))
            throw new Error('email has no @')

        if (!email.includes('.'))
            throw new Error('email has no .')

        if (email.lastIndexOf('.') < email.indexOf('@'))
            throw new Error('email has . before @')

        if (email.lastIndexOf('.') - email.indexOf('@') < 2)
            throw new Error('email has . next to @')

        if (email.length - 1 - email.indexOf('.') < 2)
            throw new Error('email domain is lower than 2 characters')

        if (email.includes(' '))
            throw new Error('email has space character')
    }

    function validatePassword(password) {    //password
        if (password.length < 8)
            throw new Error('Password is too short')

        if (password.includes(' '))
            throw new Error('Password has space character, please delete it')

        if (!password.length) throw new Error('password is empty. Write a password')
    }

    function validateUserId(userId) {
        if (typeof userId !== 'string') throw new Error('userId is not a string')
        if (userId.includes(' ')) throw new Error('userId has spaces')
        if (!userId.length) throw new Error('userId is empty')
    }

    function validateText(text) {
        if (typeof text !== 'string') throw new Error('text is not a string')
        if (!text.length) throw new Error('text is empty')
    }

    //logic
    function registerUser(name, lastname, birthdate, username, email, password) {   //register
        validateName(name)
        validateLastname(lastname)
        validateBirthdate(birthdate)
        validateUsername(username)
        validateEmail(email)
        validatePassword(password)

        var user = data.findUser(function (user) {
            return user.username === username || user.email === email
        })

        if (user !== undefined)
            throw new Error('user already exists')

        var user = {
            name: name,
            lastname: lastname,
            birthdate: birthdate,
            username: username,
            email: email,
            password: password
        }

        data.insertUser(user)
    }

    function loginUser(username, password) { //login user
        validateUsername(username)
        validatePassword(password)

        var user = data.findUser(function (user) {
            return user.username === username
        })

        if (user === undefined)
            throw new Error('user not found')

        if (user.password !== password)
            throw new Error('wrong password')

        sessionStorage.userId = user.id

        user.online = true

        data.updateUser(user)
    }

    function retrieveUser() { //retrieve user 
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (user === undefined)
            throw new Error('user not found')

        return user
    }

    function logoutUser() {   //logout
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        user.online = false

        data.updateUser(user)

        delete sessionStorage.userId
    }

    function retrieveUsers() {
        var users = data.getAllUsers()

        var index = users.findIndex(function (user) {
            return user.id === sessionStorage.userId
        })

        users.splice(index, 1)

        users.forEach(function (user) {
            delete user.name
            delete user.lastname
            delete user.birthdate
            delete user.email
            delete user.password
        })

        users.sort(function (user1, user2) {
            return user1.online > user2.online ? -1 : 1
        })

        return users
    }

    function sendMessageToUser(userId, text) {
        validateUserId(userId)
        validateText(text)

        var message = {
            from: sessionStorage.userId,
            to: userId,
            text: text,
            date: new Date().toISOString()
        }
        data.insertMessage(message)

    }

    function retrieveMessagesWithUser(userId) {
        validateUserId(userId)

        var messages = data.findMessages(function (message) {
            return message.from === sessionStorage.userId && message.to === userId || message.from === userId && message.to === sessionStorage.userId

        })

        return messages
    }
    function getLoggedInUserId() {
        return sessionStorage.userId
    }

    //object with functions
    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        retrieveUsers: retrieveUsers,
        sendMessageToUser: sendMessageToUser,
        retrieveMessagesWithUser: retrieveMessagesWithUser,
        getLoggedInUserId: getLoggedInUserId
    }
})()
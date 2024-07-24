// business layer (logic)

var logic = (function () {
//helpers

function validateName(name) {
        // name validations
        if (name.length < 1)
            throw new Error('name is lower than 1 character')

        var nameIsBlank = true

        for (var i = 0; i < name.length && nameIsBlank; i++) {
            var char = name[i]

            if (char !== ' ')
                nameIsBlank = false
        }

        if (nameIsBlank)
            throw new Error('name is blank')
    }
    function validateBirthdate(birthdate) {
        if (birthdate.length !== 10)
            throw new Error('birthdate does not have 10 characters')

        if (birthdate.includes(' '))
            throw new Error('birthdate has a space character')

        if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
            throw new Error('birthdate dashes are not in correct position')

        //Todo check that the birthdate has only 2 dashes
        //Todo check that birthdate has not alphabet characters(only numbers and 2 dashes)
        //Todo check that birthdate is equal or greater than 18 years old

    }

    function validateUsername(username) {

        if (username.length < 3)
            throw new Error('username is lower than 3 characters')

        if (username.includes(' '))
            throw new Error('username has a space character')
    }

    function validateEmail(email) {

        if (email.length < 6)
            throw new Error('email is lower than 6 charcters')

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
            throw new Error('email has space characters')
    }

    function validatePassword(password) {

        if (password.length < 8)
            throw new Error('password is lower than 8 characters')

        if (password.includes(' '))
            throw new Error('password has space characters')
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

    // logic

    function registerUser(name, birthdate, username, email, password) {

        validateName(name)
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

        if (user === undefined)
            throw new Error('user not found')

        if (user.password !== password)
            throw new Error('wrong password')

        sessionStorage.userId = user.id

        user.online = true


        data.updateUser(user)


    }


    function retrieveUser() {

        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })
        // para preguntar 
        if (user === undefined)
            throw new Error('user not found')

        return user
    }

    function logoutUser() {

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
        // para preguntar 
        users.splice(index, 1)

        users.forEach(function (user) {
            delete user.name
            delete user.birthdate
            delete user.email
            delete user.password
            //delete user.online
        })

        users.sort(function (user1, users2) {

            return user1.online > users2.online ? -1 : 1
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
            date: new Date().toISOString
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

    // para preguntar como function retrieve messages

    function getLoggedInUserId() {
        return sessionStorage.userId
    }

    function createPost(image, text) {
        validateText(image)
        validateText(text)

        var post = {
            author: sessionStorage.userId,
            image: image,
            text: text,
            date: new Date().toISOString()
        }

        return posts.reverse()
        function retrievePosts(){
            var posts = data.getAllPosts()

            posts.forEach (function(post){
                var user = data.findUser(function(user){
                    return user.id === post.author
                })
                delete user.name
                delete user.birthdate
                delete user.email
                delete user.password
                delete user.online

                post.author = user
            })

            return posts.reverse()
        }
    }

    return {

        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        retrieveUsers: retrieveUsers,
        sendMessageToUser: sendMessageToUser,
        retrieveMessagesWithUser: retrieveMessagesWithUser,
        getLoggedInUserId: getLoggedInUserId,
        createPost: createPost,
        retrievePosts:retrievePosts
    }
})()
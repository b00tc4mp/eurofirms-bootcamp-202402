// business layer (logic)
import data from "./data"

var logic = (function () {
    //helpers
    //name validations
    function validateName(name) {
        //name has at least 1 character
        if (name.length < 1)
            throw new Error('name is lower than 1 character')
        var nameIsBlank = true
        //name is not blank
        for (var i = 0; i < name.length && nameIsBlank; i++) {
            var char = name[i]
            if (char !== ' ')
                nameIsBlank = false
        }
        if (nameIsBlank)
            throw new Error('name is blank');

    }
    //birthdate validations

    function validateBirthdate(birthdate) {
        //birthdate has 10 characters
        if (birthdate.length !== 10)
            throw new Error('birthdate does not have 10 characters')
        //birthdate has one or more blank characters
        if (birthdate.includes(' '))
            throw new Error('birthdate has a space character')
        //birthdate has the correct format (yyyy-mm-dd) we check if the dashes (-) are in the correct places since we want a date object
        if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
            throw new Error('birthdate dashes are not in correct position')
        // TODO check that birthdate has only 2 dashes
        // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
        // TODO check that birthdate is equal or greater than 18 years old
    }
    //username validations
    function validateUsername(username) {

        //username has at least 3 characters
        if (username.length < 3)
            throw new Error('username is lower than 3 characters')
        //username cant have space characters
        if (username.includes(' '))
            throw new Error('username has a space characters');
    }
    //email validations
    function validateEmail(email) {
        //email has at least 6 characters
        if (email.length < 6)
            throw new Error('email us lower than 6 characters')
        //email must contain the character @
        if (!email.includes('@'))
            throw new Error('email has no @')
        //email must contain the character dot (.)
        if (!email.includes('.'))
            throw new Error('email has no .')
        //email has to follow the format x@y.zz
        if (email.lastIndexOf('.') < email.indexOf('@'))
            throw new Error('email has . before @')
        if (email.lastIndexOf('.') - email.indexOf('@') < 2)
            throw new Error('email has . next to @')
        if (email.length - 1 - email.indexOf('.') < 2)
            throw new Error('email domain is lower than 2 characters')
        //email cant contain space characters
        if (email.includes(' '))
            throw new Error('email has space characters')
    }
    //password validations
    function validatePassword(password) {
        //password must be at least 8 characters
        if (password.length < 8)
            throw new Error('password is lower than 8 characters')
        //password cant contain space characters
        if (password.includes(' '))
            throw new Error('password has space characters')

        if (!password.length)
            throw new Error('password is empty')
    }
    //userId validations
    function validateUserId(userId) {

        if (typeof userId !== 'string')
            throw new Error('text is not a string')

        if (userId.includes(' '))
            throw new Error('userId has space characters')

        if (!userId.length)
            throw new Error('userId is empty')
    }
    //text validations
    function validateText(text) {

        if (typeof text !== 'string')
            throw new Error('text is not a string')
        if (!text.length)
            throw new Error('text is empty')
    }

    //logic

    function registerUser(name, birthdate, email, username, password) {

        validateName(name)
        validateBirthdate(birthdate)
        validateEmail(email)
        validateUsername(username)
        validatePassword(password)

        //check if user already exist via email (if already exist, then throw error)
        var user = data.findUser(function (user) {
            return user.username === username || user.email === email
        })

        if (user !== undefined)
            throw new Error('user already exists')
        //object to store the form data
        var user = {
            name: name,
            birthdate: birthdate,
            username: username,
            email: email,
            password: password
        }
        data.insertUser(user)

    }

    function loginUser(username, password) { //function that logins the user if credentials are correct and validated
        validateUsername(username)
        validatePassword(password)

        var user = data.findUser(function (user) {
            return user.username === username
        })

        if (user === undefined) //if we didnt find any matches then user will be undefinded, that means user was not found ->error
            throw new Error('user not found')

        if (user.password !== password)//if the input password doesnt match the password inside our users (localStorage), that means password is wrong ->error
            throw new Error('wrong password')

        sessionStorage.userId = user.id

        user.online = true

        data.updateUser(user)
    }


    function retrieveUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })
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

        users.splice(index, 1)

        users.forEach(function (user) {
            delete user.name
            delete user.birthdate
            delete user.email
            delete user.password
            // delete user.online
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

    function createPost(image, text) {
        validateText(image)
        validateText(text)

        var post = {
            author: getLoggedInUserId(),
            image: image,
            text: text,
            date: new Date().toISOString()
        }

        data.insertPost(post)
    }

    function retrievePosts() {
        var posts = data.getAllPosts()

        posts.forEach(function (post) {
            var user = data.findUser(function (user) {
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
        retrievePosts: retrievePosts
    }

})()

export default logic
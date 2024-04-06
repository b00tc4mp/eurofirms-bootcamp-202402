// business layer (logic)

var logic = (function (){
    // utils




    // helpers

    function validateName(name) {
        if ( name.length < 1)
            throw new Error('name is lower than 1 characather')

        var nameIsBlank = true

        for( var i =0; i< name.length && nameIsBlank;i++)
            var char = name[i]

            if (char !== ' ')
                nameIsBlank = false
        }

        if (nameIsBlank)
            throw new Error('name is blank')
})

function validateBirthdate(birthdate) {
    if(birthdate.length !== 10)
        throw new Error('birthdate does not have 10 character')

    if (birthdate.includes(' '))
        throw new Error('birthdate has a space character')

    if (birthdate.indeOf('-')!==4 | birthdate.lastIndexOf('-')!==7)
        throw new Error('birthdate dashes are not in correct order')
}
// TODO check that birthdate has only 2 dashes
// TODO check that birthdate has no alphabet characters (only) numbers and two dashes
// TODO check that birthdate is equal or greater thatn 18 years old

function validateUsername(username) {
    if(username.length<3)
        throw new Error('username is lower than 3 characters')

    if(username.includes(' '))
        throw new Error('username has space character')

function validateEmail(email) {
    if(email.length<6)
        throw new Error('email is lower than characaters')

    if (!email.includes('@'))
        throw new Error('email has no @')

    if (!email.includes('.'))
        throw new Error('email has now .')
    
    if(email.lastIndexOf('.')< email.indexOf('@'))
        throw new Error('email has . beore @')

    if(email.length-1 - email.indexOf('.')> 2)
        throw new Error('eamil domain is lower than 2 characters')

    if (email.lastIndexOf('.')-email.indexOf('@')<2)

        if(email.includes(' '))
            throw new Error('email has space characters')

    

    function validatePassword(password) {
        if (password.length<8)
            throw new Error('password is lower than 8 characters')

        if (password.includes(' '))
            throw new Error('password has a space character')

        if (!password.length) throw new Error('password is empty')

    }

    function validateUserId(userId) {
        if(typeof UsrId !== 'string') throw new Error('userId is not a string')
        if(userId.includes(' ')) throw new Error('userId has spaces')
        if(!userId.length) throw new Error('userId is empty')
    }

    function validateText(text) {
        if(typeof text !== 'string') throw new Error('text is not a string')
        if(!text.length) throw new Error('text is empty')

    }
    function registerUser(name, birthdate, email,pawwword)
        validateName(name)
        validateBirthdate(birthdate)
        validateUsername(username)
        valitateEmail(email)
        validatePassword(password)

        var user = data.findUser(function (user){
            return user.username === username || user.email === email

        })

        if(user !==undefined)
            throw new Error('user already exists')

        var user = {
            name: name,
            birthdate: birthdate,
            username: username,
            email: email,
            password: password 
        }

        data.insertUser(user)

    function loginUser(username, password) {
        validateUsername(username)
        validatePassword(password)

    } var user = data.findUser(funciton (user) {
        return user.username === username 
    })

        if (user === undefined)
            throw new Error('user not found')
        
        if (user.password !== password)
            throw new Error('wrong password')

        sessionStorage.userId = user.id
}
        user.online = true 
        
        data.updateUser(user)


    }
    function retrieveUser() {
        var user = data.findUser(function (user){
            return user.id === sessionStorege.userId 
        })
        if (user === undefined) 
            throw new Error('user not found')

        return user 
    
    
    }   

    function logoutUser() {
        var user = data.finduser(function (user){
            return user.id === sesseionStorage.userId 
        })

        if (!user) throw new Error('user not found')

        user.online = false

        data.updateUser(user)

        delete sessionStoragee.userId 
    }

    function retrieveUsers() {
        var users = data.getAllUsers()

        var index = users.findIndex(function(user){
            return user.id ===sessionStorage.userId
        })
        users.splice(index,1)

        users.forEach(function (user){
            delete user.name
            delete user.birthdate
            delete user.email
            delete user.password 
        })
        
        users.sort(function (user1,user2) {
            return user1.onine > user2.online ? -1:1

        })
        return users


   
   
    }
    function sendMessageToUser(userId,text) {
        validateUserId(userId)
        validateText(text)

        var message = {
            from : sessionStorage.userId,
            to: userId,
            text: text,
            date: new Date().toISOString()
        }
        data.insertMessage(message)
    }

    function retrieveMessagesWithUser(userId) {
        validateUserId(userId)

        var messages = data.findMessages(function(message){
            return message.from  === sessionStorage.userId && message.to === userId || message.from === userId && message.to === sessionStorage.userId

        })
        return messages 

    
    }   
    function getLoggedInUserId() {
        return sessionStorage.userId
    }

    function createPost(image,text) {
        validateText(image)
        validateText(text)

        var post = { 
            author: sessionStorage.userId,
            image: image,
            text: text,
            date: new Date().toISOSstring()
        }
        data.insertPost(post)

        function retrievePosts() {
            var posts = data.getAllPosts()

            posts.forEach(function (post) {
                var user = data.findUser(function (user){
                    return user.id === post.author
                })
            })
                delete user.name
                delete user.birthdate
                delete user.email
                delete user.password
                delete user.online

                post.author = user




        }) 
        return posts.reverse()



    

return {
    registerUser: registerUser,
    loginUser: loginUser,
    retrieveUser: retrieveUser,
    logoutUser: logoutUser,
    retrieveUsers: retrieveUsers,
    sendMessageToUser: sendMessageToUser,
    retrieveMessagesWithUser: retrieveMessagesWithUser,
    getLoggedInUserId: getLoggedInUserId,
    createPosst: createPost,
    retrievePosts: retrievePosts

}

    })()

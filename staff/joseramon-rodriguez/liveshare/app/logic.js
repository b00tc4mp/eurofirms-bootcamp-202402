// business layer (logic)

function registerUser(name, birthdate, username, email, password) {
    //name validations
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

    //birthdate validations
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

    //username validations
    //username has at least 3 characters
    if (username.length < 3)
        throw new Error('username is lower than 3 characters')
    //username cant have space characters
    if (username.includes(' '))
        throw new Error('username has a space characters');
    //email validations
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
    //password validations
    //password must be at least 8 characters
    if (password.length < 8)
        throw new Error('password is lower than 8 characters')
    //password cant contain space characters
    if (password.includes(' '))
        throw new Error('password has space characters')

    var users = JSON.parse(localStorage.users || '[]')


    //check if user already exist via email (if already exist, then throw error)
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        //check if username already exist via username or email (if already exist, then throw error)
        if (user.username === username || user.email === email)
            throw new Error('user already exist')
    }
    //object to store the form data
    var user = {
        id: parseInt(Math.random() * 1000000000000000000).toString(36),
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }
    //adds the new user into the storage of users -> users []
    users[users.length] = user
    //pull data into localStorage to not lose it
    localStorage.users = JSON.stringify(users)
}

function loginUser(username, password) { //function that logins the user if credentials are correct and validated
    if (username.length < 3)// username has at least 3 characters
        throw new Error('username is lower than 3 characters')

    if (username.includes(' '))//username has no space characters
        throw new Error('username has a space character')

    if (password.length < 8)//password has at least 8 characters
        throw new Error('password is lower than 8 characters')

    var user

    var users = JSON.parse(localStorage.users || '[]')

    for (var i = 0; i < users.length; i++) { //look in users (localStorage for all registered users)
        var user2 = users[i] //put aside the data of users on each iteration

        if (user2.username === username) { //if the input username matches the name of an user in our users (localStorage) 
            user = user2 //then take them aside

            break
        }
    }

    if (user === undefined) //if we didnt find any matches then user will be undefinded, that means user was not found ->error
        throw new Error('user not found')

    if (user.password !== password)//if the input password doesnt match the password inside our users (localStorage), that means password is wrong ->error
        throw new Error('wrong password')
    sessionStorage.id = user.id
}
function retrieveUser() {
    var user

    var users = JSON.parse(localStorage.users || '[]')

    for (var i = 0; i < users.length; i++) {
        var user2 = users[i]

        if (user2.id === sessionStorage.id) {
            user = user2
            break
        }
    }
    if (user === undefined)
        throw new Error('user not found')

    return user
}
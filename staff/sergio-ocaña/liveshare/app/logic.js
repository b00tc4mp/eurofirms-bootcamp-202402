function registerUser(name, birthdate, username, email, password) {
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
    if (birthdate.length !== 10)
        throw new Error('birthdate does not have 10 characters')
    if (birthdate.includes(' '))
        throw new Error('birthdate has a space character')
    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
        throw new error('birthdates dashes are not in correct position')
    // TODO check that birthdate has only 2 dashes
    // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
    // TODO check that birthdate is equal or greater than 18 years old
    if (username.length < 3)
        throw new Error('username is lower than 3 characters')
    if (username.includes(' '))
        throw new Error('username has a space character')
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
    if ((email.length - 1 - email.lastIndexOf('.')) < 2)
        throw new Error('email domain is lower than 2 characters')
    if (email.includes(' '))
        throw new Error('email has a space character')
    if (password.length < 8)
        throw new Error('password is lower than 8 characters')
    if (password.includes(' '))
        throw new Error('password has a space character')
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        if (user.email === email)
            throw new Error('email already exist')
        if (user.username === username)
            throw new Error('username already exist')
    }

    var user = {
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }
    users[users.length] = user
    localStorage.users = JSON.stringify(users)
}
function loginUser(username, password) {
    if (username.length < 3)
        throw new Error('username is lower than 3 characters')
    if (username.includes(' '))
        throw new Error('username has a space character')
    if (password.length < 8)
        throw new Error('password is lower than 8 characters')
    if (password.includes(' '))
        throw new Error('password has a space character')

    var user
    for (var i = 0; i < users.length; i++) {
        var user2 = users[i]
        if (user2.username === username) {
            user = user2
            break
        }
    }
    if (user === undefined)
        throw new Error('user not found')
    if (user.password !== password)
        throw new Error('wrong password')
}
function validateName(name) {
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

    // TODO check that birthdate has only 2 dashes
    // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
    // TODO check that birthdate is equal or greater than 18 years old
}

function validateUsername(username) {
    if (username.length < 3)
        throw new Error('username is lower than 3 characters')

    if (username.includes(' '))
        throw new Error('username has a space character')
}

function validateEmail(email) {
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

function validatePassword(password) {
    if (password.length < 8)
        throw new Error('password is lower than 8 characters')

    if (password.includes(' '))
        throw new Error('password has space character')

    if (!password.length) throw new Error('password is empty')
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
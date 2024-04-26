import errors from './errors.js'

const { ContentError } = errors

//name validations
function validateName(name) {
    if (typeof name !== 'string')
        throw new TypeError('name is not a string')
    //name has at least 1 character
    if (name.length < 1)
        throw new RangeError('name is lower than 1 character')
    let nameIsBlank = true
    //name is not blank
    for (let i = 0; i < name.length && nameIsBlank; i++) {
        const char = name[i]
        if (char !== ' ')
            nameIsBlank = false
    }
    if (nameIsBlank)
        throw new ContentError('name is blank');

}
//birthdate validations

function validateBirthdate(birthdate) {
    if (typeof birthdate !== 'string')
        throw new TypeError('birthdate is not a string')
    //birthdate has 10 characters
    if (birthdate.length !== 10)
        throw new RangeError('birthdate does not have 10 characters')
    //birthdate has one or more blank characters
    if (birthdate.includes(' '))
        throw new ContentError('birthdate has a space character')
    //birthdate has the correct format (yyyy-mm-dd) we check if the dashes (-) are in the correct places since we want a date object
    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
        throw new ContentError('birthdate dashes are not in correct position')
    // TODO check that birthdate has only 2 dashes
    // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
    // TODO check that birthdate is equal or greater than 18 years old
}
//username validations
function validateUsername(username) {
    if (typeof username !== 'string')
        throw new TypeError('username is not a string')
    //username has at least 3 characters
    if (username.length < 3)
        throw new RangeError('username is lower than 3 characters')
    //username cant have space characters
    if (username.includes(' '))
        throw new ContentError('username has a space characters');
}
//email validations
function validateEmail(email) {
    if (typeof email !== 'string')
        throw new TypeError('text os not a string')
    //email has at least 6 characters
    if (email.length < 6)
        throw new RangeError('email us lower than 6 characters')
    //email must contain the character @
    if (!email.includes('@'))
        throw new ContentError('email has no @')
    //email must contain the character dot (.)
    if (!email.includes('.'))
        throw new ContentError('email has no .')
    //email has to follow the format x@y.zz
    if (email.lastIndexOf('.') < email.indexOf('@'))
        throw new ContentError('email has . before @')
    if (email.lastIndexOf('.') - email.indexOf('@') < 2)
        throw new ContentError('email has . next to @')
    if (email.length - 1 - email.indexOf('.') < 2)
        throw new ContentError('email domain is lower than 2 characters')
    //email cant contain space characters
    if (email.includes(' '))
        throw new ContentError('email has space characters')
}
//password validations
function validatePassword(password) {
    if (typeof password !== 'string')
        throw new TypeError('password is not a string')
    //password must be at least 8 characters
    if (password.length < 8)
        throw new RangeError('password is lower than 8 characters')
    //password cant contain space characters
    if (password.includes(' '))
        throw new ContentError('password has space characters')

    if (!password.length)
        throw new ContentError('password is empty')
}
//userId validations
function validateUserId(userId) {
    if (typeof userId !== 'string')
        throw new TypeError('userID is not a string')

    if (userId.includes(' '))
        throw new ContentError('userId has space characters')

    if (!userId.length)
        throw new ContentError('userId is empty')
}
//text validations
function validateText(text) {
    if (typeof text !== 'string')
        throw new TypeError('text is not a string')
    if (!text.length)
        throw new ContentError('text is empty')
}

const validate = {
    name: validateName,
    birthdate: validateBirthdate,
    username: validateUsername,
    email: validateEmail,
    password: validatePassword,
    userId: validateUserId,
    text: validateText
}

export default validate
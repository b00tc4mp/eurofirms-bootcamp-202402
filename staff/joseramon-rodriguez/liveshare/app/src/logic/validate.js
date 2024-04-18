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

export default validate
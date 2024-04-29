import errors from "./errors.js"

const { ContentError } = errors

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')

    if (name.length < 1)
        throw new RangeError('name is lower than 1 character')

    var nameIsBlank = true

    for (var i = 0; i < name.length && nameIsBlank; i++) {
        var char = name[i]

        if (char !== ' ')
            nameIsBlank = false
    }

    if (nameIsBlank)
        throw new ContentError('name is blank')
}

function validateBirthdate(birthdate) {
    if (typeof birthdate !== 'string') throw new TypeError('birthdate is not a string')

    if (birthdate.length !== 10)
        throw new RangeError('birthdate does not have 10 characters')

    if (birthdate.includes(' '))
        throw new ContentError('birthdate has a space character')

    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
        throw new ContentError('birthdate dashes are not in correct position')

    // TODO check that birthdate has only 2 dashes
    // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
    // TODO check that birthdate is equal or greater than 18 years old
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username is not a string')

    if (username.length < 3)
        throw new RangeError('username is lower than 3 characters')

    if (username.includes(' '))
        throw new ContentError('username has a space character')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')

    if (email.length < 6)
        throw new RangeError('email is lower than 6 characters')

    if (!email.includes('@'))
        throw new ContentError('email has no @')

    if (!email.includes('.'))
        throw new ContentError('email has no .')

    if (email.lastIndexOf('.') < email.indexOf('@'))
        throw new ContentError('email has . before @')

    if (email.lastIndexOf('.') - email.indexOf('@') < 2)
        throw new ContentError('email has . next to @')

    if (email.length - 1 - email.indexOf('.') < 2)
        throw new ContentError('email domain is lower than 2 characters')

    if (email.includes(' '))
        throw new ContentError('email has space character')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')

    if (password.length < 8)
        throw new RangeError('password is lower than 8 characters')

    if (password.includes(' '))
        throw new ContentError('password has space character')

    if (!password.length) throw new ContentError('password is empty')
}

function validateUserId(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')

    if (userId.includes(' ')) throw new ContentError('userId has spaces')
    if (!userId.length) throw new ContentError('userId is empty')
}

function validateText(text) {
    if (typeof text !== 'string') throw new TypeError('text is not a string')

    if (!text.length) throw new ContentError('text is empty')
}

function postId(postId) {
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')

    if (postId.includes(' ')) throw new ContentError('postId has spaces')

    if (!postId.length) throw new ContentError('postId is empty')
}

function image(image) {
    if (typeof image !== 'string') throw new TypeError('image is not a string')

    if (!image.length) throw new ContentError('image is empty')

    if (!image.startsWith('http')) throw new ContentError('image is not a URL')
}



const validate = {
    name: validateName,
    birthdate: validateBirthdate,
    username: validateUsername,
    email: validateEmail,
    password: validatePassword,
    userId: validateUserId,
    text: validateText,
    postId: postId,
    image: image
}

export default validate
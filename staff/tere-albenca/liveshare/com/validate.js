import errors from './errors.js'

const { ContentError, MatchError } = errors

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
function validateLastname(lastname) {
    if (typeof lastname !== 'string') throw new TypeError('lastname is not a string')

    if (lastname.length < 2)
        throw new RangeError('lastname is lower than 1 character')

    var lastnameIsBlank = true

    for (var i = 0; i < lastname.length && lastnameIsBlank; i++) {
        var char = lastname[i]

        if (char !== ' ')
            lastnameIsBlank = false
    }

    if (lastnameIsBlank)
        throw new ContentError('lastname is blank')
}

function validateBirthdate(birthdate) {
    if (typeof birthdate !== 'string') throw new TypeError('birthdate is not string')

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
    if (typeof email !== 'string') throw new TypeError('email is not string')

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
    if (typeof password !== 'string') throw new TypeError('password is not string')

    if (password.length < 8)
        throw new RangeError('password is lower than 8 characters')

    if (password.includes(' '))
        throw new ContentError('password has space character')

    if (!password.length) throw new ContentError('password is empty')
}

function validateId(id, explain = 'id') {
    if (typeof id !== 'string') throw new TypeError(`${explain}id is not a string`)

    if (id.length !== 24) throw new RangeError(`${explain} length is not 24`)

    if (id.includes(' ')) throw new ContentError(`${explain}id has spaces`)

    if (!id.length) throw new ContentError(`${explain}id is empty`)
}

function validateText(text, explain = 'text') {
    if (typeof text !== 'string') throw new TypeError(`${explain}text is not a string`)

    if (!text.length) throw new ContentError(`${explain}text is empty`)
}

function validateUrl(url, explain = ' url') {
    if (typeof url !== 'string') throw new TypeError(`${explain}this input is not a string`)

    if (!url.length) throw new ContentError(`${explain} is empty`)

    if (!url.startsWith('http')) throw new ContentError(`${explain}this string is not a url`)
}

function validateToken(token, explain = 'token') {
    if (typeof token !== 'string') throw new TypeError(`${explain} is not a string`)

    if (!token.length) throw new ContentError(`${explain} is empty`)

    const [, payload64,] = token.split('.')
    const payloadJSON = atob(payload64)
    const payload = JSON.parse(payloadJSON)

    const { exp } = payload

    const now = Date.now() / 1000

    if (exp < now) throw new MatchError(`${explain} expired`)
}

const validate = {
    name: validateName,
    lastname: validateLastname,
    birthdate: validateBirthdate,
    email: validateEmail,
    username: validateUsername,
    password: validatePassword,
    id: validateId,
    text: validateText,
    url: validateUrl,
    token: validateToken
}

export default validate
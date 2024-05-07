import errors from "./errors.js";

const { ContentError, MatchError } = errors

function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
    if (!string.length) throw new ContentError(`${explain} is empty`)
}

function validateNumber(number, explain = 'number') {
    if (typeof number !== 'number' || isNaN(number)) throw new TypeError(`${explain} is not a number`)
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not string')

    if (name.length < 1)
        throw new RangeError('name is lower than 1 character')

    let nameIsBlank = true

    for (let i = 0; i < name.length; i++) {
        const char = name[i];

        if (char !== '')
            nameIsBlank = false
    }

    if (nameIsBlank)
        throw new ContentError('name is blank')
}

function validateBirthdate(birthdate) {
    if (typeof birthdate !== 'string') throw new TypeError('birthdate is not string')

    if (birthdate.length !== 10)
        throw new RangeError('birthdate does not have 10 characters')

    if (birthdate.includes(' ')) throw new ContentError('birthdate has a space character')

    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7) throw new ContentError('birthdate dashes are not in correct')

    const birthdateDate = new Date(birthdate)

    const todayDate = new Date()

    const diffTime = Math.abs(todayDate - birthdateDate)

    const age = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

    if (age < 18) throw new MatchError('age is lower than 18')
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username in not a string')

    if (username.length < 3) throw new RangeError('username is lower than 3 characters')

    if (username.includes(' ')) throw new ContentError('username has a space character')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')

    if (email.length < 6) throw new RangeError('email is lower than 6 characters')

    if (!email.includes('@')) throw new ContentError('email has no @')

    if (!email.includes('.')) throw new ContentError('email has no .')

    if (email.lastIndexOf('.') - email.indexOf('@') < 2) throw new ContentError('email has . next to @')

    if (email.length - 1 - email.indexOf('.') < 2) throw new ContentError('email domain is lower than 2 characters')

    if (email.includes(' ')) throw new ContentError('email has space character')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')

    if (password.length < 8) throw new RangeError('password is lower than 8 characters')

    if (password.includes(' ')) throw new ContentError('password has space character')
}

function validateId(id, explain = 'id') {
    if (typeof id !== 'string') throw new TypeError(`${explain} is not a string`)
    if (id.length !== 24) throw new RangeError(`${explain} length is not 24`)
    if (id.includes(' ')) throw new ContentError(`${explain} has spaces`)
    if (!id.length) throw new ContentError(`${explain} is empty`)
}

function validateUrl(url, explain = 'url') {
    if (typeof url !== 'string') throw new TypeError(`${explain} is not a string`)
    if (!url.length) throw new ContentError(`${explain} is empty`)
    if (!url.startsWith('http')) throw new ContentError(`${explain} is not an http address`)
}

function validateDescription(description) {
    if (typeof description !== 'string') throw new TypeError('description is not a string')
}

function validateState(state) {
    if (state !== 'used' && state !== 'new') throw new TypeError('invalid state')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')

    if (!token.length) throw new ContentError('token is empty')

    const [, payload64,] = token.split('.')
    const payloadJSON = atob(payload64)
    const payload = JSON.parse(payloadJSON)

    const { exp } = payload

    const now = Date.now() / 1000

    if (exp < now) throw new MatchError('token expired')
}

const validate = {
    string: validateString,
    number: validateNumber,
    name: validateName,
    birthdate: validateBirthdate,
    email: validateEmail,
    username: validateUsername,
    password: validatePassword,
    id: validateId,
    url: validateUrl,
    description: validateDescription,
    state: validateState,
    token: validateToken
}

export default validate
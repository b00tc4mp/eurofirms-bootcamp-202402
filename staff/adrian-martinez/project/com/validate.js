import errors from './errors.js'

const { ContentError, MatchError } = errors

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not string')

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

function validateSurnames(surnames){
    if(typeof surnames !== "string") throw new TypeError("surname is not string");
}

function validateAge(age){
    if(typeof age !== "number") throw new TypeError("age is not a number");
}

function validateEmail(email){
    if(typeof email !== "string") throw new TypeError("email is not string");
}

function validatePassword(password){
    if(typeof password !== "string") throw new TypeError("password is not string");
}

function validateDireccion(address){
    if(typeof address !== "string") throw new TypeError("adrress is not string");
}

function validateActividad(activity){
    if(typeof activity !== "string") throw new TypeError("activity is not string");
}

function validateText(text){
    if(typeof text !== "string") throw new TypeError("activity is not string");
}


function validateId(id, explain = "id") {

    if(typeof id !== "string") throw new TypeError(explain +" is not string")

    if(id.length !== 24) throw new RangeError(explain +" is not string")

    if (id.includes(' ')) throw new ContentError(explain +" has spaces")

    if (!id.length) throw new ContentError(explain +" is empty")
}

function validateUrl(url, explain = 'url') {
    if (typeof url !== 'string') throw new TypeError(`${explain} is not a string`)

    if (!url.length) throw new ContentError(`${explain} is empty`)

    if (!url.startsWith('http')) throw new ContentError(`${explain} is not an http address`)
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
    surnames: validateSurnames,
    age: validateAge,
    email: validateEmail,
    password: validatePassword,
    direccion: validateDireccion,
    actividad: validateActividad,
    url: validateUrl,
    token: validateToken,
    id: validateId,
    text: validateText
}

export default validate
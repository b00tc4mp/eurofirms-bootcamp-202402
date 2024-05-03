import { User } from '../data/index.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, birthdate, email, username, password) {
    validate.name(name)
    validate.birthdate(birthdate)
    validate.username(username)
    validate.email(email)
    validate.password(password)

    return User.findOne({ $or: [{ email }, { username }] })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError('user already exists')

            user = { name, birthdate, email, username, password }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerUser
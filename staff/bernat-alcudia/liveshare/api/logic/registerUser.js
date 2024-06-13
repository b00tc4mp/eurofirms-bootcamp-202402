import { User } from "../data/index.js"
import { errors, validate } from 'com'

const { SystemError, DuplicityError } = errors

// Api logic methods

function registerUser(name, birthdate, email, username, password) {
    validate.name(name)
    validate.birthdate(birthdate)
    validate.email(email)
    validate.username(username)
    validate.password(password)


    return User.findOne({ $or: [{ email }, { username }] })

        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) {
                throw new DuplicityError('user already exits')
            }
            user = { name, birthdate, email, username, password }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerUser
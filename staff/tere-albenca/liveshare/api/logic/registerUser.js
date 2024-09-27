import { User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, lastname, birthdate, email, username, password) {
    validate.name(name)
    validate.lastname(lastname)
    validate.birthdate(birthdate)
    validate.email(email)
    validate.username(username)
    validate.password(password)



    return User.findOne({ $or: [{ username }, { email }] })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError("user already exists");

            user = { name, lastname, birthdate, email, username, password };

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}
export default registerUser
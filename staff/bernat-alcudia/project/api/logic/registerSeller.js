
import { errors, validate } from 'com';
import { User } from '../data/index.js';

const { SystemError, DuplicityError } = errors

function registerSeller(name, birthdate, email, username, password) {
    validate.name(name)
    validate.birthdate(birthdate)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    const role = 'seller'

    return User.findOne({ $or: [{ email }, { username }] })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError('user already exists')

            user = { name, birthdate, email, username, password, role }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerSeller
import { User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, surname, email, password) {
    validate.name(name)
    validate.surname(surname)
    validate.email(email)
    validate.password(password)

    const role = "user"
    return User.findOne({ email })

     .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError('user already exists')

            user = { name, surname, email, password, role: 'regular' }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerUser
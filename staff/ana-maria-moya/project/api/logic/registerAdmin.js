import { User } from '../data/index.js'
import { errors, validate } from 'com'

 const {DuplicityError, SystemError} = errors
function registerAdmin(name, surname, birthdate, email, password) {
    validate.name(name)
    validate.surname(surname)
    validate.email(email)
    validate.password(password)

    return User.findOne({ email })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError('user already exists')

            user = { name, surname, birthdate, email, password, role:'admin'}

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerAdmin
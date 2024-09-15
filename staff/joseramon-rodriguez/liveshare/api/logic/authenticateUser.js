import { User } from '../data/index.js'
import { validate, errors } from 'com'

const { SystemError, MatchError } = errors

function authenticateUser(username, password) {
    // TODO input validations
    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user || user.password !== password) throw new MatchError('wrong credential->cant log in')

            return user.id
        })
}

export default authenticateUser
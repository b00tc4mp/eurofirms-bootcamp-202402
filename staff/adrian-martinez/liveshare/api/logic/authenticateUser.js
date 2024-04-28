import { User } from '../data/index.js'
import validate from "./validate.js"
import errors from './errors.js'

const { SystemError, MatchError } = errors;

function authenticateUser(username, password) {
    
    validate.username(username);
    validate.password(password);

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')


            if (user.password !== password)
                throw new MatchError('wrong credentials')

            return user.id
        })
}

export default authenticateUser
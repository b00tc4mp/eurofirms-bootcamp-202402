import { User } from '../data/index.js'
import { errors, validate} from 'com'

const { SystemError, MatchError } = errors

function authenticateUser(email, password) {
    validate.email(email)
    validate.password(password)

    return User.findOne({ email})
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
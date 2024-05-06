import { User } from "../data"
import { errors, validate } from "../../com"

const { SystemError, MatchError } = errors

function authenticateUser(username, password) {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            if (user.password !== password)
                throw new MatchError('worn credentials please check it')

            return user.id
        })
}

export default authenticateUser
import { User } from "../data/index.js"
import { errors, validate } from "com";

const { MatchError, SystemError } = errors


function retrieveUser(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(targetUser => {
            if (!targetUser)
                throw new MatchError('target user not found')

            return targetUser
        })
}

export default retrieveUser
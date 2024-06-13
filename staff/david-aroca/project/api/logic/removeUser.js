import { User } from "../data/index.js";
import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function removeUser(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return User.findById(targetUserId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(targetUser => {
            if (!targetUser)
                throw new MatchError('target user not found')

            return User.deleteOne({ _id: targetUserId })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeUser

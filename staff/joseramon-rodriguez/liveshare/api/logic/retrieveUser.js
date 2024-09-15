import { User } from "../data/index.js"
import { validate, errors } from 'com'

const { SystemError, MatchError } = errors

function retrieveUser(userId, targetUserId) {
    validate.id(userId, 'user id')
    validate.id(targetUserId, 'target user id')

    return User.findOne({ _id: userId }, 'name username -_id')
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {
            if (!user) {
                throw new MatchError('user not found->cant retrieve user data')
            }
            return User.findById(targetUserId).select('-_id name username').lean()
                .then((targetUser) => {
                    if (!targetUser) throw new MatchError('target user not found')

                    return targetUser
                })
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default retrieveUser

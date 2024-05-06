import { User } from '../data/index.js'
import { validate, errors } from 'com'

const { SystemError, MatchError } = errors

function retrieveUser(userId, targetUserId) {
    validate.id(userId)
    validate.id(targetUserId)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found. Cant retrieve user data')

            return User.findById(targetUserId).select('-_id username wallet')
                .catch(error => { throw new SystemError(error.message) })
                .then(targetUser => {
                    if (!targetUser)
                        throw new MatchError('target user not found')

                    return targetUser
                })
        })
}

export default retrieveUser
import { User } from '../data/index.js'
import { errors, validate} from 'com'

const { MatchError, SystemError } = errors

function retrieveUser(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new MatchError('User not found')
            }

            return User.findById(targetUserId).select('-_id name username role').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(targetUser => {
                    if (!targetUser) {
                        throw new MatchError('Target user not found')
                    }

                    return targetUser
                })
        })
}

export default retrieveUser


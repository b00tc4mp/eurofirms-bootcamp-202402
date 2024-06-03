import { errors, validate } from 'com';
import { User } from '../data/index.js';

const { MatchError, SystemError } = errors

function retrieveUser(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId).select('-_id name username saved').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(targetUser => {
            if (!targetUser) throw new MatchError('target user not found')
            const saved = targetUser.saved.map(savedProduct => savedProduct.toString())
            targetUser.saved = saved
            return targetUser
        })
}

export default retrieveUser
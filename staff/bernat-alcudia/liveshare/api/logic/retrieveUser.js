import { User } from "../data/index.js"


// Api logic methods

function retrieveUser(userId, targetUserId) {
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) {
                throw new Error('user not found')
            }
            return User.findById(targetUserId).select('-_id name username').lean()
                .catch(error => { throw new Error(error.message) })
                .then(targetUser => {
                    if (!targetUser) {
                        throw new Error('target user not found')
                    }
                    return targetUser
                })
        })
}

export default retrieveUser
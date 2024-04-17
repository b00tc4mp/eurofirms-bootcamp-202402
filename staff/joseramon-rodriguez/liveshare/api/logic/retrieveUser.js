import { User } from "../data/index.js"

function retrieveUser(userId, targetUserId) {
    // TODO input validations
    return User.findOne({ _id: userId }, 'name username -_id')
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (!user) {
                throw new Error('user not found->cant retrieve user data')
            }
            return User.findById(targetUserId).select('-_id name username').lean()
                .then((targetUser) => {
                    if (!targetUser) throw new Error('target targetUser not found')

                    return targetUser
                })
                .catch(error => { throw new Error(error.message) })
        })
}

export default retrieveUser

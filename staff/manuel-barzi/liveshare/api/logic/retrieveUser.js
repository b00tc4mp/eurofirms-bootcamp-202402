import { User } from '../data/index.js'

function retrieveUser(userId) {
    // TODO input validation

    return User.findById(userId).select('-_id name username').lean() // { name username }
        .then(user => {
            if (!user)
                throw new Error('user not found')

            return user
        })
}

export default retrieveUser
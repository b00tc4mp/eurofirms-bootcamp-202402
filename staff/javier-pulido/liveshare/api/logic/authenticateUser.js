import { User } from '../data/index.js'

function authenticateUser(username, password) {
    //TODO input validation

    return User.findOne({ username })
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user)
                throw new Error('user not found')

            if (user.password !== password)
                throw new Error('wrond credentials')

            return user.id
        })
} 

export default authenticateUser
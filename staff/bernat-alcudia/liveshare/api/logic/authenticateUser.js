import { User } from "../data/index.js"
// Api logic methods
function authenticateUser(username, password) {

    return User.findOne({ username })
        .catch((error) => { throw new Error(error.message) })
        .then((user) => {
            if (!user) {
                throw new Error('no valid credentials')
            }
            if (user.password !== password) {
                throw new Error('wrong credentials')
            }
            return user.id
        })
}

export default authenticateUser
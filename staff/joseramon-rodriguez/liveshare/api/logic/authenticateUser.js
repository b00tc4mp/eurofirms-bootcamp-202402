import { User } from "../data/index.js"

function authenticateUser(username, password) {
    // TODO input validations
    return User.findOne({ username }).lean()
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user || user.password !== password) throw new Error('wrong credential->cant log in')

            return user._id.toString()
        })
}

export default authenticateUser
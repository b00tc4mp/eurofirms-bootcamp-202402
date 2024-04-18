import { User } from '../data/index.js'

function registerUser(name, birthdate, email, username, password) {
    return User.findOne({ $or: [{ username }, { email }] })
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (user) throw new Error("user already exists")

            user = { name, birthdate, email, username, password }

            return User.create(user)
        })
        .then(user => { })
}

export default registerUser
import { User } from "../data/index.js"

function registerUser(name, birthdate, email, username, password) {
    return User.findOne({ $or: [{ email }, { username }] })

        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (user) {
                throw new Error('user already exits')
            }
            user = { name, birthdate, email, username, password }

            return User.create(user)
                .catch(error => { throw new Error(error.message) })
        })
        .then(user => { })
}

export default registerUser
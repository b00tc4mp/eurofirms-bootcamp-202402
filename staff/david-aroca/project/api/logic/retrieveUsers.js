import { User } from "../data/index.js"

import { errors } from "com";

const { SystemError, MatchError } = errors

function retrieveUsers() {

    return User.find()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return User.find().select('-__v').lean()
                .then(users => {
                    users.forEach(user => {
                        return user
                    })
                    return users
                })
        })
}

export default retrieveUsers
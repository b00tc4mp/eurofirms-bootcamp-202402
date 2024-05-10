import { User, Diet } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function retrieveDiet(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Diet.find().select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(diets => {
                    diets.forEach(diet => {
                        if (diet._id) {
                            diet.id = diet._id.toString()

                            delete diet._id
                        }

                        if (diet.author._id) {
                            diet.author.id = diet.author._id.toString()

                            delete diet._id
                        }
                    })
                    return diets.reverse()
                })
        })

}

export default retrieveDiet
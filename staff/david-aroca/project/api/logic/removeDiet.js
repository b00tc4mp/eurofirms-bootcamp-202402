import { User, Diet } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function removeDiet(userId, dietId) {
    validate.id(userId, 'userId')
    validate.id(dietId, 'dietId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Diet.findById(dietId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(diet => {
            if (!diet)
                throw new MatchError('diet not found')

            if (diet.author.toString() !== userId)
                throw new MatchError('diet does not belong to the user')

            return Diet.deleteOne({ _id: dietId })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeDiet
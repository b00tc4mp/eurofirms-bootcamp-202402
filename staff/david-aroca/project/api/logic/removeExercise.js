import { User, Exercise } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function removeExercise(userId, exerciseId) {
    validate.id(userId, 'userId')
    validate.id(exerciseId, 'exerciseId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Exercise.findById(exerciseId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(exercise => {
            if (!exercise)
                throw new MatchError('exercise not found')

            if (exercise.author.toString() !== userId)
                throw new MatchError('exercise does not belong to the user')

            return Exercise.deleteOne({ _id: exerciseId })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeExercise
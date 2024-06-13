import { User, Exercise } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function retrieveExercises(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Exercise.find().select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(exercises => {
                    exercises.forEach(exercise => {
                        if (exercise._id) {
                            exercise.id = exercise._id.toString()

                            delete exercise._id
                        }

                        if (exercise.author._id) {
                            exercise.author.id = exercise.author._id.toString()

                            delete exercise.author._id
                        }
                    })
                    return exercises.reverse()
                })
        })

}

export default retrieveExercises
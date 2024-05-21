import { User, Measurement } from "../data/index.js"

import { validate, errors } from "com"

const { SystemError, MatchError } = errors

// TODO
function retrieveMeasurements(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Measurement.find({ author: userId }).select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(measurements => {
                    measurements.forEach(measurement => {

                        if (measurement._id) {
                            measurement.id = measurement._id.toString()

                            delete measurement._id
                        }

                        if (measurement.author._id) {
                            measurement.author.id = measurement.author._id.toString()

                            delete measurement.author._id
                        }
                    })
                    return measurements.reverse()
                })
        })
}

export default retrieveMeasurements
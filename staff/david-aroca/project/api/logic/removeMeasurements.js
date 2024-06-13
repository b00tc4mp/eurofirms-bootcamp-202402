import { User, Measurement } from "../data/index.js"

import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function removeMeasurements(userId, measurementId) {
    validate.id(userId, 'userId')
    validate.id(measurementId, 'measurementId')


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Measurement.findById(measurementId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(measurement => {
            if (!measurement)
                throw new MatchError('measure not found')

            if (measurement.author.toString() !== userId)
                throw new MatchError('measure does not belong to the user')

            return Measurement.deleteOne({ _id: measurement._id })
                .catch(error => { throw new SystemError(error.message) })

        })
        .then(result => { })
}

export default removeMeasurements
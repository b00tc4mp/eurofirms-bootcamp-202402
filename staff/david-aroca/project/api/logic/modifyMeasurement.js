import { User, Measurement } from "../data/index.js"

import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function modifyMeasurement(userId, measurementId, date, weight, torso, legs) {
    // TODO VALICACIONES
    // validate.id(userId, 'userId')
    // validate.date(date, 'date')

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

            measurement.date = date
            measurement.weight = weight
            measurement.torso = torso
            measurement.legs = legs

            return measurement.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default modifyMeasurement
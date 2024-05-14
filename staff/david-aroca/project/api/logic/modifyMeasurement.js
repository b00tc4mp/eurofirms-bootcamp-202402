import { User, Measurement } from "../data/index.js"

import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function modifyMeasurement(userId, measurementId, date, weight, torso, legs) {
    validate.id(userId, 'userId')
    validate.id(measurementId, 'measurementId')
    validate.date(date, 'date')
    validate.weight(weight, 'weight')
    validate.torso(torso, 'torso')
    validate.legs(legs, 'legs')

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
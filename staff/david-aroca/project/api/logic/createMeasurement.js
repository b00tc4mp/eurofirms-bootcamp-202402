import { User, Measurement } from "../data/index.js";

import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function createMeasurement(userId, date, weight, torso, legs) {
    // TODO VALICACIONES
    // validate.id(userId, 'userId')
    // validate.date(date, 'date')

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            const measurement = {
                author: user._id,
                date,
                weight,
                torso,
                legs
            }

            return Measurement.create(measurement)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(measurement => { })
}

export default createMeasurement
import { User, Measurement } from "../data/index.js"
import { errors, validate } from "com"

const { SystemError, MatchError } = errors

function searchMeasurements(userId, startDateQuery, endDateQuery) {
    validate.id(userId, 'userId')
    validate.date(startDateQuery, 'startDateQuery')
    validate.date(endDateQuery, 'endDateQuery')


    const startDate = new Date(startDateQuery)
    const endDate = new Date(endDateQuery)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) { throw new MatchError('User not found') }

            return Measurement.find({
                "date": {
                    "$gte": startDate,
                    "$lt": endDate
                },
                "author": userId
            })
                .select('-__v')
                .populate('author', 'username')
                .lean()
                .then(measurements => {
                    if (measurements.length === 0) { throw new MatchError('Measurement not found') }

                    measurements.forEach(measurement => {
                        measurement.id = measurement._id.toString()
                        delete measurement._id

                        if (measurement.author._id) {
                            measurement.author.id = measurement.author._id.toString()
                            delete measurement.author._id
                        }
                    })

                    return measurements
                })
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default searchMeasurements

import { User, Measurement } from "../data/index.js"
import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function retrieveUserMeasurements(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return User.findById(targetUserId)
                .catch(error => { throw new SystemError(error.message) })
                .then(targetUser => {
                    if (!targetUser)
                        throw new MatchError('target user not found')

                    return Measurement.find({ author: targetUserId }).select('-__v').populate('author', 'username').lean()
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
        })
}

export default retrieveUserMeasurements

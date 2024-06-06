import { User, Event } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, UnauthorizedError, NotFoundError } = errors

function deleteEvent({ userId, eventId }) {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new SystemError('User not found')
            }
            if (user.role !== 'admin') {
                throw new UnauthorizedError('Only admins can delete events')
            }


            return Event.findById(eventId).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
                .then(event => {
                    if (!event) {
                        throw new NotFoundError('Event not found')
                    }
                    return Event.deleteOne({ _id: eventId })
                        .catch(error => { throw new SystemError(error.message) })
                })

        })

}

export default deleteEvent

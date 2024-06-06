import { User, Event } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError, UnauthorizedError } = errors

function createEvent({ userId, type, title, date, duration, address, description }) {
    validate.id(userId, 'userId')
    validate.text(type, 'type')
    validate.text(title, 'title')
    validate.date(date, 'date')
    validate.duration(duration, 'duration')
    if (address) validate.text(address, 'address')
    if (description) validate.text(description, 'description')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new SystemError('User not found')
            }
            if (user.role !== 'admin') {
                throw new UnauthorizedError('Only admins can create events')
            }

            return Event.find({ date }).lean()
        })
        .then(existingEvents => {
            const eventsDuration = existingEvents.reduce((totalDuration, existingEvent) => {
                totalDuration += existingEvent.duration

                return totalDuration
            }, 0)

            if (eventsDuration >= 3) {
                throw new DuplicityError('This day is fulled for events')
            }

            const formattedDate = new Date(date).toISOString()
            const newEvent = { type, title, date: formattedDate, duration, address, description }//userId

            return Event.create(newEvent)
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}

export default createEvent
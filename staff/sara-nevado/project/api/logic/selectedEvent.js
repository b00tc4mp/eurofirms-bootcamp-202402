import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError } = errors

function selectedEvent(eventId, userId) {
    validate.id(eventId, 'eventId')
    validate.id(userId, 'userId')

    return Promise.all([
        User.findById(userId),
        Event.findById(eventId)
    ])
    .catch(error => { throw new SystemError(error.message) })
    .then(([user, event]) => {
        if (!user) throw new SystemError('User not found')
        if (!event) throw new SystemError('Event not found')

        if (user.selectedEvents.includes(eventId)) {
            throw new DuplicityError('Event already selected by this user')
        }

        return user
    })
    .then(user => {
        user.selectedEvents.push(eventId)
        return user.save()
    })
    .catch(error => {
        if (error instanceof DuplicityError) {
            throw error
        } else {
            throw new SystemError(error.message)
        }
    })
}

export default selectedEvent



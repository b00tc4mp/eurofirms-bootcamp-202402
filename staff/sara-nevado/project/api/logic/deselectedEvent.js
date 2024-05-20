import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError } = errors

function deselectedEvent(eventId, userId) {
    validate.id(eventId, 'eventId')
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new SystemError('User not found')

            const eventIndex = user.selectedEvents.indexOf(eventId)
            if (eventIndex === -1) {
               
              
                return user
            }

            user.selectedEvents.splice(eventIndex, 1)
            return user.save()
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}

export default deselectedEvent

import { errors, validate } from 'com'
import { Event, User } from '../data/index.js'

const { MatchError, SystemError } = errors

function retrieveEvent(eventId) {
   
    validate.id(eventId, 'eventId')
   
    return Event.findById(eventId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('User not found')
            return Event.findById(eventId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(event => {
                    if (!event)
                        throw new MatchError('Event not found')

                    event.id = event._id.toString()

                    delete event._id

                    return event
                })
        })

}

export default retrieveEvent

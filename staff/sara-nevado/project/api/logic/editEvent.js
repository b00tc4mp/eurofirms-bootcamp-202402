import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { NotFoundError, SystemError } = errors

function editEvent(day, newText) { //, userRole
  //  const isAdmin = userRole === 'admin'

   // if (!isAdmin) {
       // return Promise.reject(new Error('Insufficient permissions to create events'));
  //  }

    validate.day(day)
    validate.text(newText)

    const newEvent = { day, text: newText} //, role: userRole 

    return Event.findOne({ day })
        .catch(error => { throw new SystemError(error.message) })
        .then(existingEvent => {
            if (!existingEvent) {
                throw new NotFoundError('Event not found for this day')
            }

            existingEvent.text = newText
            return existingEvent.save()
        })
        .catch(error => {
            if (error instanceof NotFoundError) {
                throw error
            } else {
                throw new SystemError(error.message)
            }
        })
}

export default editEvent


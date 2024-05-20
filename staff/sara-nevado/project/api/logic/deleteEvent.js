import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { NotFoundError, SystemError } = errors

function deleteEvent(day) { //, userRole
   // const isAdmin = userRole === 'admin'

  //  if (!isAdmin) {
      //  return Promise.reject(new Error('Insufficient permissions to delete events'))
    //}

    validate.day(day)

    return Event.findOneAndDelete({ day })
        .catch(error => { throw new SystemError(error.message) })
        .then(deletedEvent => {
            if (!deletedEvent) {
                throw new NotFoundError('Event not found for this day')
            }

            return deletedEvent
        })
        .catch(error => {
            if (error instanceof NotFoundError) {
                throw error
            } else {
                throw new SystemError(error.message)
            }
        })
}

export default deleteEvent

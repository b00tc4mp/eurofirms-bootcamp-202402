import { User, Event } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError } = errors

function createEvent(day, text) { //user:role
    console.log('Llamando a la función createEvent()...')
    console.log('Parámetros recibidos:', day, text, userRole)
    
    //onst isAdmin = userRole === 'admin'

    //if (!isAdmin) {
       // console.log('Insufficient permissions to create events')
       // return Promise.reject(new Error('Insufficient permissions to create events'))
    //}

    validate.day(day)
    validate.text(text)

    const newEvent = { day, text } //role: userRole

    return User.findById( userId )
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new DuplicityError('Event already exists for this day')
            }

            return Event.create(newEvent)
        })
        .catch(error => {
            if (error instanceof DuplicityError) {
                throw error
            } else {
                throw new SystemError(error.message)
            }
        })
}

export default createEvent



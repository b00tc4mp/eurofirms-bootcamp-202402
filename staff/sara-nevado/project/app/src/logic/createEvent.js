import { errors, validate, utils } from 'com'

const { SystemError, DuplicityError } = errors 

function createEvent(day, text ) { //userRole
   // if (userRole !== 'admin') {
       // throw new Error('Insufficient permissions to create events')
   // }

    validate.day(day)
    validate.text(text)
   

    const token = sessionStorage.getItem('token')
    validate.token(token)

    const { sub: userId } = utils.extractPayload(token)

    return fetch(`${import.meta.env.VITE_API_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ day, text, userId })
    })
    .then(res => {
        if (res.status === 201) {
            return res.json();
        } else if (res.status === 409) {
            throw new DuplicityError('Event already exists for this day')
        } else {
            throw new SystemError(`Failed to create event: ${res.statusText}`)
        }
    })
    .catch(error => {
        throw new SystemError(`Failed to create event: ${error.message}`)
    })
}

export default createEvent

import { errors, validate, utils } from 'com'

const { SystemError, NotFoundError } = errors 

function editEvent(eventId, day, newText) { //, userRole
   // if (userRole !== 'admin') {
      //  throw new Error('Insufficient permissions to edit events')
   // }

    validate.day(day)
    validate.text(newText)

    const token = sessionStorage.getItem('token');
    validate.token(token);

    const { sub: userId } = utils.extractPayload(token);

    return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ day, text: newText, userId })
    })
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else if (res.status === 404) {
            throw new NotFoundError('Event not found')
        } else {
            throw new SystemError(`Failed to edit event: ${res.statusText}`)
        }
    })
    .catch(error => {
        throw new SystemError(`Failed to edit event: ${error.message}`)
    });
}

export default editEvent

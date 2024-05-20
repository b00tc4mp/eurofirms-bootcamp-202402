import { errors, validate, utils } from 'com'

const { SystemError, DuplicityError } = errors 

function selectedEvent(eventId, userId) {
    validate.eventId(eventId)
    validate.userId(userId)

    const token = sessionStorage.getItem('token');
    validate.token(token)

    const { sub: authenticatedUserId } = utils.extractPayload(token)

    if (authenticatedUserId !== userId) {
        throw new Error('Unauthorized: Provided userId does not match authenticated user');
    }

    return fetch(`${import.meta.env.VITE_API_URL}/events/select`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ eventId, userId })
    })
    .then(res => {
        if (res.status === 201) {
            return res.json();
        } else if (res.status === 409) {
            throw new DuplicityError('Event already selected by this user')
        } else {
            throw new SystemError(`Failed to select event: ${res.statusText}`)
        }
    })
    .catch(error => {
        throw new SystemError(`Failed to select event: ${error.message}`)
    })
}

export default selectedEvent

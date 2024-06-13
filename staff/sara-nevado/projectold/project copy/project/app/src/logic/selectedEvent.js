import { errors, validate } from 'com'

const { SystemError } = errors

function selectedEvent(eventId) {
    validate.token(sessionStorage.token)
    validate.id(eventId, 'eventId')

    return fetch(`${import.meta.env.VITE_API_URL}/events/select/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 204) {
                return 'Selected successfully'
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

export default selectedEvent


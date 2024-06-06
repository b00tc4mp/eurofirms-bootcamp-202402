import { errors, validate } from 'com'

const { SystemError } = errors

function selectEvent(eventId) {
   validate.id(eventId, 'eventId')
   validate.token(sessionStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}/select`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 204) {
                return 
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

export default selectEvent


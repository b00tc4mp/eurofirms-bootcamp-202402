import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function retrieveEvent(eventId) {
    validate.id(eventId, 'eventId')

    return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(event => {
                        if (!event)
                            throw new MatchError('Event not found')

                        event.id = event._id.toString()

                        delete event._id

                        return event
                    })
            } else {
                throw new SystemError(`Failed to retrieve event: ${res.statusText}`)
            }
        })
}

export default retrieveEvent

import { errors, validate} from 'com'

const { SystemError} = errors

function editEvent(eventId, updatedEvent) {
  validate.id(eventId, 'eventId')
  validate.event(updatedEvent)
  validate.token(sessionStorage.token)

  return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.token}`,
    },
    body: JSON.stringify(updatedEvent),
  })
    .catch(error => { throw new SystemError(error.message) })
    .then(response => {
      if (response.status === 204) 
        return

      return response.json()
        .catch(error => { throw new SystemError(error.message) })
        .then(body => {
          const { error, message } = body

          const constructor = errors[error]

          throw new constructor(message)
        })
    })
}
export default editEvent;






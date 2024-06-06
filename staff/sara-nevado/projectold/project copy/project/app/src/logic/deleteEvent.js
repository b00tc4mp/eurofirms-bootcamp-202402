import { errors, validate } from 'com'

const { SystemError } = errors

function deleteEvent(eventId) {
  validate.token(sessionStorage.token)
  validate.id(eventId, 'eventId')

  return fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.token}`
    }
  })
    .catch(error => { throw new SystemError(error.message) })
    .then(res => {
      if (res.status === 204) {
        return 'Deleted successfully'
      }

      return res.json()
        .catch(error => { throw new SystemError(error.message) })
        .then(body => {
          const { error, message } = body
          const constructor = errors[error] || SystemError
          throw new constructor(message)
        })
    })
}

export default deleteEvent




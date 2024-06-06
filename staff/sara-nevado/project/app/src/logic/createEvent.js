import { errors, validate} from 'com'

const { SystemError} = errors

function createEvent(newEvent) {
  validate.event(newEvent)
  validate.token(sessionStorage.token)

  return fetch(`${import.meta.env.VITE_API_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.token}`,
    },
    body: JSON.stringify(newEvent), //estaba mal
  })

    .catch(error => { throw new SystemError(error.message) })
    .then(res => {
      if (res.status === 201)
        return

      return res.json()
        .catch(error => { throw new SystemError(error.message) })
        .then(body => {
          const { error, message } = body
          const constructor = errors[error]
          throw new constructor(message)
        })
    })
}

export default createEvent

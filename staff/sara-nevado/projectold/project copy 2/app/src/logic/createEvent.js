import { errors, validate, utils } from 'com'

const { SystemError, DuplicityError } = errors

async function createEvent(newEvent) {
  try {
    validate.event(newEvent)
    const token = sessionStorage.getItem('token')
    validate.token(token)
    const { sub: userId } = utils.extractPayload(token)

    const eventData = { ...newEvent, userId }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    })


    if (response.status === 201) {
      const responseData = await response.json()
      return responseData;
    } else if (response.status === 409) {
      throw new DuplicityError('Event already exists')
    } else {
      const errorText = await response.text()
      console.error('Failed to create event:', errorText)
      throw new SystemError(`Failed to create event: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error in createEvent:', error)
    throw error
  }
}

export default createEvent

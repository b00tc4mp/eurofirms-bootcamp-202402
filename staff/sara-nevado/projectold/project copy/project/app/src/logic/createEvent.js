import { errors, validate, utils } from 'com'

const { SystemError, DuplicityError } = errors

async function createEvent(newEvent) {
  try {
    validate.event(newEvent)
    const token = sessionStorage.getItem('token')
    validate.token(token)

    const { sub: userId } = utils.extractPayload(token)

   const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId, ...newEvent }),
    })

  if (response.status === 201) {
      const responseData = await response.json().catch(() => {
        console.error('Failed to parse JSON response')
        return null
      })

      if (responseData) {
      
        return responseData;
      } else {
        throw new SystemError('Invalid JSON response')
      }
    } else if (response.status === 409) {
      throw new DuplicityError('Event already exists')
    } else {
      const errorText = await response.text();
      console.error('Failed to create event:', errorText)
      throw new SystemResponse(`Failed to create event: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error in createEvent:', error)
    throw error
  }
}

export default createEvent

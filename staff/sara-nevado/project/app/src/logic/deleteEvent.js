
import { errors, validate, utils } from 'com'

const { SystemError, NotFoundError } = errors 

async function deleteEvent(eventId) {
    try {
       
        validate.token(sessionStorage.token)

        
        const { sub: userId } = utils.extractPayload(sessionStorage.token)

       
        const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })

   
        if (response.status === 200) {
            return response.json()
        } else if (response.status === 404) {
            throw new NotFoundError('Event not found')
        } else {
            throw new SystemError(`Failed to delete event: ${response.statusText}`)
        }
    } catch (error) {
        
        throw new SystemError(`Failed to delete event: ${error.message}`)
    }
}

export default deleteEvent

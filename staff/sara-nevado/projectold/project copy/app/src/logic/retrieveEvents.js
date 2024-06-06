import { errors, validate } from 'com'

const { SystemError } = errors

async function retrieveEvents(month, year) {
    validate.month(Number(month))
    validate.year(Number(year))

    try {
        const token = sessionStorage.getItem('token')
        if (!token) {
            throw new SystemError('No token found')
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${month}/${year}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new SystemError(`HTTP error! Status: ${response.status}`)
        }

        const events = await response.json()
        events.forEach(event => {
            if (event._id) {
                event.id = event._id.toString()
                delete event._id
            }
        })
        return events
    } catch (error) {
        console.error('Error fetching events:', error)
        throw new SystemError(error.message)
    }
}

export default retrieveEvents




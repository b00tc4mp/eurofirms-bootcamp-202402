import { Event } from '../data/index.js'
import { validate, errors } from 'com'

const { SystemError } = errors

async function retrieveEvents(month, year) {
    validate.month(month, 'month')
    validate.year(year, 'year')

    try {
        const events = await Event.find({})
            .select('-__v')
            .lean()

        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.date)
            const eventMonth = eventDate.getUTCMonth() + 1 // getUTCMonth() devuelve el mes en base 0
            const eventYear = eventDate.getUTCFullYear()
            return eventMonth === month && eventYear === year
        })

        return filteredEvents.map(event => {
            if (event.id) {
                event.id = event.id.toString()
                delete event.id
            }
         

            return event
        })
    } catch (error) {
        console.error('Error in find:', error)
        throw new SystemError(error.message)
    }
}



export default retrieveEvents
//campo subscribers debera de tener solamente la Id como string en lugar de los new object en la base de datos. Corregido.

// Actualizar el estado del evento con la nueva lista de suscriptores

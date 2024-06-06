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
            if (!event.id) {
                event.id = event._id.toString()
                delete event._id
            }
             if (event.subscribers && event.subscribers.length > 0) { 
                event.subscribers = event.subscribers.map(subscriber => subscriber.toString())
            }
            //si event.id asigna un valor a la pro id del obj event
            //event.subscribers tendria que hacer lo mismo y asignar un valor a la prop subscribers del obj event.
            //faltaria:  event.subscribers = 
            return event
        })
    } catch (error) {
        console.error('Error in find:', error)
        throw new SystemError(error.message)
    }
}
export default retrieveEvents




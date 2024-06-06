import { Event } from '../data/index.js'
import { validate, errors } from 'com'

const { SystemError } = errors

async function retrieveEvents(month, year) {
    validate.month(month, 'month')
    validate.year(year, 'year')

    try {
        const events = await Event.find({})
            .select('-__v').populate({
                path: 'subscribers',
                select: 'name surname'


            })
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
            if (event.subscribers.length > 0) {
                event.subscribers = event.subscribers.map(subscriber => {
                    if (subscriber._id) {
                        subscriber.id = subscriber._id.toString()
                        delete subscriber._id

                    }
                    return subscriber
                })
            }


            return event
        })
    } catch (error) {
        console.error('Error in find:', error)
        throw new SystemError(error.message)
    }
}
export default retrieveEvents




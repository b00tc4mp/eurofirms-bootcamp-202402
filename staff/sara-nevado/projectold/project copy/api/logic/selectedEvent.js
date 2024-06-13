import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

async function selectedEvent(userId, eventId) {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')

    try {
        const event = await Event.findOne({ _id: eventId }).lean()

        if (!event) {
            throw new MatchError('Event not found')
        }

        if (event.subscribers.includes(userId)) {
            throw new MatchError('User is already subscribed to this event')
        }

        const updateResult = await Event.updateOne(
            { _id: eventId },
            { $addToSet: { subscribers: userId } }  // Añadir usuario a la lista de suscriptores
        )

        // Verificar que la actualización fue correcta
        if (updateResult.nModified === 0) {
            throw new SystemError('Failed to update the event. No documents were modified.')
        }



    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default selectedEvent




//primero comprobar userId.
//comprobar que el evento seleccionado exista
//comprobar que el evento no esta seleccionado y si esta seleccionado 'error'
//seleccionar el evento (sin devolverlo)
import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

async function selectedEvent(userId, eventId) {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')
    
    try {
        // Buscar el evento
        const event = await Event.findOne({ _id: eventId }).lean();

        if (!event) {
            throw new MatchError('Event not found')  // Comprobar que el evento seleccionado exista
        }

        // Comprobar que el usuario no está ya suscrito
        if (event.subscribers.includes(userId)) {
            throw new MatchError('User is already subscribed to this event')  // Comprobar que el usuario no está ya suscrito
        }

        // Actualizar el evento para añadir el usuario a los suscriptores
        const updateResult = await Event.updateOne(
            { _id: eventId },
            { $addToSet: { subscribers: userId } }  // Añadir usuario a la lista de suscriptores
        );

        // Verificar que la actualización tuvo efecto
        if (updateResult.nModified === 0) {
            throw new SystemError('Failed to update the event. No documents were modified.');
        }

        console.log('Update successful, document was updated.');

    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default selectedEvent



//primero comprobar userId.
//comprobar que el evento seleccionado exista
//comprobar que el evento no esta seleccionado y si esta seleccionado 'error'
//seleccionar el evento (sin devolverlo)
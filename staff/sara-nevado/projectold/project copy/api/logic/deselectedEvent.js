import { errors, validate } from 'com'
import { Event } from '../data/index.js'
import mongoose from 'mongoose'

const { SystemError, MatchError } = errors
const { ObjectId } = mongoose.Types

async function deselectedEvent(userId, eventId) {
    validate.id(userId, 'userId')
    validate.id(eventId, 'eventId')

    try {
        // Convertir userId y eventId a ObjectId
        const userObjectId = new ObjectId(userId)
        const eventObjectId = new ObjectId(eventId)

        // Buscar el evento
        const event = await Event.findOne({ _id: eventObjectId }).lean()

        if (!event) {
            throw new MatchError('Event not found')  // Comprobar que el evento seleccionado exista
        }

        // Comprobar que el usuario está suscrito
        const isSubscribed = event.subscribers.some(subscriberId => subscriberId.equals(userObjectId))
        if (!isSubscribed) {
            throw new MatchError('User is not subscribed to this event')  // Comprobar que el usuario está suscrito
        }

        // Actualizar el evento para quitar el usuario de los suscriptores
        const updateResult = await Event.updateOne(
            { _id: eventObjectId },
            { $pull: { subscribers: userObjectId } }  // Quitar usuario de la lista de suscriptores
        )

        // Verificar que la actualización tuvo efecto
        if (updateResult.nModified === 0) {
            throw new SystemError('Failed to update the event. No documents were modified')
        }

    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default deselectedEvent


// Buscar el evento
// Comprobar que el evento seleccionado exista
// Comprobar que el usuario está suscrito
// Actualizar el evento para quitar el usuario de los suscriptores
// Quitar usuario de la lista
// Verificar que la actualización tuvo efecto
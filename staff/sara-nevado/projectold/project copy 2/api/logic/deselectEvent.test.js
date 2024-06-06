import mongoose from 'mongoose'
import deselectEvent from './deselectEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const userId = '665d9286523efa35ad63547f'
        const eventId = '665d9ba42a7fc64a98ca924a'

        deselectEvent(userId, eventId)
            .then(() => console.log('Usuario desuscrito correctamente.'))
            .catch(error => console.error('Error al desuscribir al usuario:', error))
    })
    .catch(error => console.error('Error de conexión a la base de datos:', error))

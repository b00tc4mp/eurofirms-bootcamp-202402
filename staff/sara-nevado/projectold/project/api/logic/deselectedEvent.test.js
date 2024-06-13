import mongoose from 'mongoose'
import deselectedEvent from './deselectedEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const userId = '6654995d1caad8e1f24fddc7'
        const eventId = '6656f95b0ce7ae7ce694d06d'

        deselectedEvent(userId, eventId)
            .then(() => console.log('Usuario desuscrito correctamente.'))
            .catch(error => console.error('Error al desuscribir al usuario:', error))
    })
    .catch(error => console.error('Error de conexión a la base de datos:', error))

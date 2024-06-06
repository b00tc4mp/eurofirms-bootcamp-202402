import mongoose from 'mongoose'
import selectEvent from './selectEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const userId = '665d9286523efa35ad63547f'
        const eventId = '665d9ba42a7fc64a98ca924a'

        selectEvent(userId, eventId)
            .then(() => console.log('Evento seleccionado correctamente.'))
            .catch(error => console.error('Error al seleccionar el evento:', error))
    })
    .catch(error => console.error('Error de conexión a la base de datos:', error))

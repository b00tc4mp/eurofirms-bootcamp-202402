import mongoose from 'mongoose'
import createEvent from './createEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const eventData = {
            userId: '6654995d1caad8e1f24fddc7',
            type: 'event',
            title: 'BJJ',
            date: '2024-05-28T00:00',
            duration: 3, 
            address: 'c/luna, nº1',
            description: 'Entrenamiento con administrador'
            
        }
        
        createEvent(eventData)
            .then(() => console.log('Event created'))
            .catch(error =>
                console.error('Error creating event:', error))
    })
    .catch(error =>
        console.error('Database connection error:', error))

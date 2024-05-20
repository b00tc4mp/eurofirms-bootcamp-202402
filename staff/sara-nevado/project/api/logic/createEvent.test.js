import mongoose from 'mongoose'
import createEvent from './createEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        createEvent('2020-02-18', 'hola', 'admin')
        .then(() => console.log('Event created'))
        .catch(error => 
            console.error('Error creating event:', error))
    })
    .catch(error => 
        console.error('Database connection error:', error))

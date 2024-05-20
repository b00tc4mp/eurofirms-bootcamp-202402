import mongoose from 'mongoose'
import selectedEvent from './selectedEvent'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
    
        selectedEvent('2020-02-18', 'hola')
            .then(() => console.log('Event selected'))
            .catch(error => 
                console.error('Error selecting event:', error))
    })
    .catch(error => 
        console.error('Database connection error:', error))

import mongoose from 'mongoose'
import editEvent from './editEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
    
        editEvent('2020-02-18', 'hola,hola', 'admin')
            .then(() => console.log('Event edited'))
            .catch(error => 
                console.error('Error editing event:', error))
    })
    .catch(error => 
        console.error('Database connection error:', error))

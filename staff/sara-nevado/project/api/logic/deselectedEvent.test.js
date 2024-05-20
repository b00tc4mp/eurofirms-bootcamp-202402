import mongoose from 'mongoose'
import deselectedEvent from './deselectedEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
    
        deselectedEvent('2028-02-14', 'user')
            .then(() => console.log('Event deselected'))
            .catch(error => 
                console.error('Error deselecting event:', error))
    })
    .catch(error => 
        console.error('Database connection error:', error))

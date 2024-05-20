import mongoose from 'mongoose'
import deleteEvent from './deleteEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        deleteEvent('2020-02-18','admin')
        .then(() => console.log('Event deleted'))
        .catch(error => 
            console.error('Error deleting event:', error))
})
.catch(error => 
    console.error('Database connection error:', error))

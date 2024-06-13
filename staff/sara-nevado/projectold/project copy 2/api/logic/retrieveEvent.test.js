import mongoose from 'mongoose'
import retrieveEvent from './retrieveEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
       
        const eventId = '665d9ba42a7fc64a98ca924a'
     

        retrieveEvent(eventId)
            .then(event => console.log('Event retrieved:', event))
            .catch(error => console.error('Error retrieving event:', error))
    })
    .catch(error => console.error('Database connection error:', error))

    //funciona test
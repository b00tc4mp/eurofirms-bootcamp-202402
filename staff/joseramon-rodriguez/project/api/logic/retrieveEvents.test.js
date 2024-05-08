import mongoose from 'mongoose'
import retrieveEvents from './retrieveEvents.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveEvents('6637fb61f98ea3c57b76ed51')
                .then((events) => console.log('events retrieved', events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
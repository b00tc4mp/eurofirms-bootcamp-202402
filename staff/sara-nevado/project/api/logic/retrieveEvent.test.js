import mongoose from 'mongoose'
import retrieveEvent from './retrieveEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        retrieveEvent('66470799ea3f65633cd33403','admin')

            .then(event => console.log('event retrieved', event))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))

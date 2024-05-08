import mongoose from 'mongoose'
import retrieveEvent from './retrieveEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveEvent('6637fb61f98ea3c57b76ed51', '663a3eebd05e4fd1612066ff')
                .then((event) => console.log('event retrieved', event))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
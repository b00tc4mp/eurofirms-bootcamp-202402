import mongoose from 'mongoose'
import retrieveComments from './retrieveComments.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveComments('66436d297176087ae2779002')
                .then(comments=> console.log('retrieved comments', comments))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
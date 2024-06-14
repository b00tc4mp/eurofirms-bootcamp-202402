import mongoose from 'mongoose'
import retrieveComments from './retrieveComments.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveComments('66548f538bd7e29a96fe6007')
                .then(comments=> console.log('retrieved comments', comments))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
import mongoose from 'mongoose'
import modifyPost from './modifyPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('662a32d05ab575767e6026c8', '661fe3ea42f04ba8b3b72d8d', 'text->updated')
                .then(() => console.log('post modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('661fdf7f68bd5f566a867a6b', '661fdf7f68bd5f566a867a6b')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            authenticateUser('aliciaexpulsada', '123123123')
                .then(userId => console.log('user logged in', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
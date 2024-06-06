import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            authenticateUser ('lua@hotmail.com','111111111')
                .then(user => console.log('user logged in', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
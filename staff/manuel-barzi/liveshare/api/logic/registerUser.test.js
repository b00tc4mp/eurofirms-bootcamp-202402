import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            registerUser('Pepito Grillo 2', '2000-01-01', 'pepito@grillo2.com', 'pepitogrillo2', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
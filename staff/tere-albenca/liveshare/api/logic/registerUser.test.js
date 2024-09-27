import mongoose from "mongoose";
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            console.log('CASE 1: it success on reate a new users')
            registerUser('Pepe', 'Lopez', '1985-01-01', 'pepe@lopez.com', 'pepote', '123123123')
                .then(() => console.log('user registered'))

            console.log('CASE 2: it fails on create user with an existent username')

            registerUser('Pepe', 'Lopez', '1985-01-01', 'pepe@lopez.com', 'pepote', '123123123')
                .then(() => console.log('case 2 failed'))


                .catch(error => console.error({ test: 'case 2 succes', error: error.message }))

        } catch (error) {
            console.error({ test: 'case 1 failed', error: error.message })
        }
    })
    .catch(error => console.error(error.message))
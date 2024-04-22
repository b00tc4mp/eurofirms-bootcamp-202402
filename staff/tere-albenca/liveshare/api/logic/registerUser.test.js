import mongoose from "mongoose";
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            registerUser('Pepe', 'Lopez', '1985-01-01', 'pepe@lopez.com', 'pepote', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
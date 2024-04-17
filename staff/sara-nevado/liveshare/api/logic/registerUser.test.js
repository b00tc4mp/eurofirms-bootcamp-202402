import mongoose, { connect } from 'mongoose'
import registerUser from './registerUser.js'


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            registerUser('Alicia Expulsada', '2000-01-01', 'Alicia@hotmail.com', 'aliciaexpulsada', '111111111')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
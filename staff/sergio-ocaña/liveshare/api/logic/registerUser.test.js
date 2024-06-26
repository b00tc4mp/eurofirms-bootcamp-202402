import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            Promise.allSettled([registerUser('Pepito Grillo 2', '2000-01-01', 'pepito@grillo30.com', 'pepitogrillo30', '123123123'),
            registerUser('Pepito Grillo 2', '2000-01-01', 'pepito@grillo30.com', 'pepitogrillo30', '123123123'),
            registerUser('Pepito Grillo 2', '2000-01-01', 'pepito@grillo30.com', 'pepitogrillo30', '123123123')])
                .then((responses) => responses.forEach(res => console.log(res)))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
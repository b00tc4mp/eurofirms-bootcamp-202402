import mongoose from 'mongoose';
import registerSeller from './registerSeller.js';

mongoose.connect('mongodb://localhost:27017/project')
    .catch(error => console.error(error))
    .then(() => {
        try {
            registerSeller('test', '1600-05-07', 'prueba9@gmail.com', 'prueba3', '121521522',)
                .then(() => console.log('seller registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
import mongoose from 'mongoose';
import registerBuyer from './registerBuyer.js';

mongoose.connect('mongodb://localhost:27017/project')
    .catch(error => console.error(error))
    .then(() => {
        try {
            registerBuyer('test', '1650-05-07', 'prueb90@gmail.com', 'prueba32', '121521522',)
                .then(() => console.log('buyer registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
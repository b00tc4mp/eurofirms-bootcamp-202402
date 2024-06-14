import mongoose from 'mongoose';
import retrieveProducts from './retrieveProducts.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveProducts('66390a8ea63805748f83bae3')
                .then(products => console.log('retrieved products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
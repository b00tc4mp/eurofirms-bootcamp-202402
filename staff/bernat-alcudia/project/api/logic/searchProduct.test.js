import mongoose from 'mongoose';
import searchProduct from './searchProduct.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchProduct('6659f64e536c064fc0f8958f', 'traje')
                .then(product => console.log('product retrieved', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })

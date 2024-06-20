import mongoose from 'mongoose';
import retrieveProductDetails from './retrieveProductDetails.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveProductDetails('6659f70f536c064fc0f89597', '665d7dc22ebfd3a48dbe6d50')
                .then(product => console.log('retrieved products', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
import mongoose from 'mongoose';
import retrieveProductDetails from './retrieveProductDetails.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveProductDetails('663ccaeac792d77a1492d494', '6647685614c29838e365a7c8')
                .then(product => console.log('retrieved products', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
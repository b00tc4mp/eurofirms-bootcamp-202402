import mongoose from 'mongoose';
import removeProduct from './removeProduct.js';


mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeProduct('663ccaeac792d77a1492d494', '664767b514c29838e365a4ef')
                .then(() => console.log('product deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
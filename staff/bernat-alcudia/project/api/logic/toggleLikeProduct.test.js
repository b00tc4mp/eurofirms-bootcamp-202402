import mongoose from 'mongoose';
import toggleLikeProduct from './toggleLikeProduct.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            toggleLikeProduct('663ccaeac792d77a1492d494', '664764cb14c29838e365765e')
                .then(() => console.log('product liked'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
import mongoose from 'mongoose';
import retrieveSavedProducts from './retrieveSavedProducts.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveSavedProducts('663ccaeac792d77a1492d494')
                .then(products => console.log('retrieved products saved', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })